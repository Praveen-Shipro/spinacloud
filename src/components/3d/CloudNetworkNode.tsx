'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CloudNetworkNode() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Create Nodes (Data Cubes)
    const nodeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    const nodes: THREE.Group[] = [];
    const numNodes = 35; // Number of floating cubes

    for (let i = 0; i < numNodes; i++) {
      const nodeGroup = new THREE.Group();
      
      const outerCube = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const coreCube = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), coreMaterial);
      
      nodeGroup.add(outerCube);
      nodeGroup.add(coreCube);

      // Random positions inside a sphere-like volume
      const radius = Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      nodeGroup.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      // Random initial rotation
      nodeGroup.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      group.add(nodeGroup);
      nodes.push(nodeGroup);
    }

    // Connect nodes with glowing lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });

    const linesGroup = new THREE.Group();
    group.add(linesGroup);

    const updateLines = () => {
      // Clear old lines
      while (linesGroup.children.length > 0) { 
        const child = linesGroup.children[0] as THREE.Line;
        linesGroup.remove(child); 
        child.geometry.dispose();
      }

      // Rebuild lines based on distance
      nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
          if (i < j && nodeA.position.distanceTo(nodeB.position) < 12) {
            const points = [nodeA.position, nodeB.position];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, lineMaterial);
            linesGroup.add(line);
          }
        });
      });
    };

    updateLines(); // Initial connection

    // Interaction state
    let mouseX = 0;
    let mouseY = 0;
    const targetRotation = new THREE.Vector2(0, 0);
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onPointerMove = (event: PointerEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    container.addEventListener('pointermove', onPointerMove);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      time += 0.01;

      targetRotation.x += (mouseX - targetRotation.x) * 0.05;
      targetRotation.y += (mouseY - targetRotation.y) * 0.05;

      // Group rotation based on mouse movement + base auto-rotation
      group.rotation.x += 0.001 + (targetRotation.y * 0.05);
      group.rotation.y += 0.002 + (targetRotation.x * 0.05);

      // Individual node animation
      nodes.forEach((node, idx) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
        
        // Very slow orbiting movement around the center
        node.position.x += Math.sin(time * 0.1 + idx) * 0.02;
        node.position.y += Math.cos(time * 0.1 + idx) * 0.02;
        node.position.z += Math.sin(time * 0.1 + idx * 0.5) * 0.02;
      });

      // Update lines periodically to save performance, or just every frame if it's smooth
      if (Math.floor(time * 100) % 5 === 0) {
        updateLines();
      }

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Cleanup geometries and materials
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      coreMaterial.dispose();
      lineMaterial.dispose();
      while(linesGroup.children.length > 0) {
        const child = linesGroup.children[0] as THREE.Line;
        linesGroup.remove(child);
        child.geometry.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing bg-transparent"
      aria-label="Interactive 3D Cloud Network Visualization"
    />
  );
}
