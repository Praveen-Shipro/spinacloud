'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface MissionGlobeProps {
  designVariant: string;
}

export default function MissionGlobe({ designVariant }: MissionGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mapGroup = new THREE.Group();
    scene.add(mapGroup);

    const isDesign2 = designVariant === 'design2';

    // 1. Stylized Low-Poly India Outline
    const indiaPoints = [
        [0, 10],      // Kashmir top
        [1.5, 8],     // J&K right
        [2.5, 7],     // Himachal
        [3.5, 5],     // Nepal border start
        [5, 4.5],     // Nepal border end
        [5.5, 5.5],   // Sikkim
        [7, 5.5],     // Bhutan border
        [9, 6],       // Arunachal
        [10, 4],      // Nagaland/Manipur
        [8, 2],       // Mizoram
        [6.5, 3],     // Tripura/Bangladesh border
        [5, 1.5],     // Bengal
        [3.5, -1],    // Odisha
        [2.5, -4],    // Andhra
        [1.5, -6],    // Tamil Nadu
        [0, -9],      // Kanyakumari
        [-1, -7],     // Kerala
        [-1.8, -4],   // Karnataka
        [-2.5, -1],   // Maharashtra
        [-3.5, 0.5],  // Gujarat bottom
        [-6, 2],      // Gujarat left
        [-5, 4],      // Gujarat top
        [-3.5, 4.5],  // Rajasthan
        [-2, 6],      // Punjab
        [-1, 8],      // J&K left
        [0, 10]       // Back to top
    ];

    const shape = new THREE.Shape();
    shape.moveTo(indiaPoints[0][0], indiaPoints[0][1]);
    for (let i = 1; i < indiaPoints.length; i++) {
        shape.lineTo(indiaPoints[i][0], indiaPoints[i][1]);
    }

    // Extrude the 2D shape into 3D
    const extrudeSettings = {
        depth: 1.5,
        bevelEnabled: true,
        bevelSegments: 2,
        bevelSize: 0.2,
        bevelThickness: 0.2
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    // Center the geometry
    geometry.computeBoundingBox();
    const centerOffset = new THREE.Vector3();
    geometry.boundingBox?.getCenter(centerOffset);
    geometry.translate(-centerOffset.x, -centerOffset.y, -centerOffset.z);

    // Create the Map Mesh (Glassy/Solid)
    const material = new THREE.MeshBasicMaterial({
        color: isDesign2 ? 0xd85803 : 0xaaaaaa,
        transparent: true,
        opacity: isDesign2 ? 0.3 : 0.15,
        side: THREE.DoubleSide
    });
    const mapMesh = new THREE.Mesh(geometry, material);
    mapGroup.add(mapMesh);

    // Add Glowing Edges
    const edgesGeo = new THREE.EdgesGeometry(geometry);
    const edgesMat = new THREE.LineBasicMaterial({ 
        color: isDesign2 ? 0xffaa00 : 0xffffff, 
        linewidth: 2,
        transparent: true,
        opacity: isDesign2 ? 0.8 : 0.4
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    mapGroup.add(edgesMesh);

    // 2. Add Beacon at Belagavi, Karnataka
    // Based on the translated bounding box, Karnataka's point (-1.8, -4) gets shifted
    const beaconX = -1.8 - centerOffset.x;
    const beaconY = -4 - centerOffset.y;
    const beaconZ = (extrudeSettings.depth / 2) + 0.2; // Just above the surface

    const dotGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const dotMat = new THREE.MeshBasicMaterial({ color: isDesign2 ? 0xffffff : 0x00f0ff });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(beaconX, beaconY, beaconZ);
    mapGroup.add(dot);

    const ringGeo = new THREE.RingGeometry(0.3, 0.4, 32);
    const ringMat = new THREE.MeshBasicMaterial({ 
        color: isDesign2 ? 0xffffff : 0x00f0ff,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    });
    const beaconRing = new THREE.Mesh(ringGeo, ringMat);
    beaconRing.position.set(beaconX, beaconY, beaconZ);
    mapGroup.add(beaconRing);

    // Optional: Add floating data particles
    let particleCloud: THREE.Points | null = null;
    if (isDesign2) {
        const pCount = 100;
        const pPositions = new Float32Array(pCount * 3);
        for(let i=0; i<pCount; i++) {
            pPositions[i*3] = (Math.random() - 0.5) * 20;
            pPositions[i*3+1] = (Math.random() - 0.5) * 20;
            pPositions[i*3+2] = (Math.random() - 0.5) * 10;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0x00f0ff,
            size: 0.15,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });
        particleCloud = new THREE.Points(pGeo, pMat);
        scene.add(particleCloud); // Add to scene so they float around the map independently
    }

    // Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const updateTarget = (x: number, y: number) => {
        const rect = container.getBoundingClientRect();
        const normX = x - rect.left - rect.width / 2;
        const normY = y - rect.top - rect.height / 2;
        targetX = (normX / rect.width) * 1.0;
        targetY = (normY / rect.height) * 1.0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateTarget(event.clientX, event.clientY);
      if (isDragging) {
          const deltaMove = {
              x: event.clientX - previousMousePosition.x,
              y: event.clientY - previousMousePosition.y
          };
          mapGroup.rotation.y += deltaMove.x * 0.01;
          mapGroup.rotation.x += deltaMove.y * 0.01;
      }
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        updateTarget(event.touches[0].clientX, event.touches[0].clientY);
        if (isDragging) {
            const deltaMove = {
                x: event.touches[0].clientX - previousMousePosition.x,
                y: event.touches[0].clientY - previousMousePosition.y
            };
            mapGroup.rotation.y += deltaMove.x * 0.01;
            mapGroup.rotation.x += deltaMove.y * 0.01;
        }
        previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
    };

    const handlePointerDown = (clientX: number, clientY: number) => {
        isDragging = true;
        previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
        isDragging = false;
    };

    // Event Listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('mousedown', (e) => handlePointerDown(e.clientX, e.clientY));
    container.addEventListener('touchstart', (e) => {
        if(e.touches.length > 0) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.02;

      // Smooth mouse interpolation for parallax
      if (!isDragging) {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        // Apply a gentle floating tilt
        mapGroup.rotation.x = (mouseY * 0.3) + Math.sin(time * 0.5) * 0.05;
        mapGroup.rotation.y = (mouseX * 0.3) + Math.cos(time * 0.3) * 0.05;
      }

      // Animate Beacon Ring
      if (beaconRing) {
          const scale = 1 + Math.sin(time * 2) * 0.3;
          beaconRing.scale.set(scale, scale, scale);
          (beaconRing.material as THREE.Material).opacity = 1 - (Math.sin(time * 2) * 0.5 + 0.5);
      }

      if (particleCloud) {
          particleCloud.rotation.y += 0.001;
          particleCloud.rotation.x += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mousedown', () => {});
      container.removeEventListener('touchstart', () => {});
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [designVariant]);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
      {/* Container for the 3D Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none" 
      />
      
      {/* Decorative center element */}
      <div className={`pointer-events-none relative z-10 flex items-center justify-center w-full h-full ${designVariant === 'design1' ? 'border border-gray-300/40 border-dashed rounded-full bg-black/10 backdrop-blur-[1px]' : 'bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-[2px]'}`}>
        <span className={`tracking-[0.3em] md:tracking-[0.4em] font-bold text-xl drop-shadow-xl ${designVariant === 'design1' ? 'text-white font-montserrat opacity-90' : 'text-white'}`}>
            I N D I A
        </span>
      </div>
    </div>
  );
}
