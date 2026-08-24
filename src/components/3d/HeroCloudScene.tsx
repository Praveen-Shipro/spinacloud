'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCloudScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core Sphere (Icosahedron Wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(4.5, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xd85803,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Inner Glowing Particle Cloud
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const warmWhite = new THREE.Color(0xffeedd);
    const orangeColor = new THREE.Color(0xd85803);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixRatio = Math.random();
      const mixed = warmWhite.clone().lerp(orangeColor, mixRatio * 0.4);
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleCloud);

    // 3. Orbiting Data Node Rings
    const ringGeo = new THREE.TorusGeometry(7, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 3;
    mainGroup.add(ring2);

    // 4. Orbiting Cubes (Cloud Servers)
    const cubeGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0xd85803,
      wireframe: true,
    });

    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const angle = (i / 8) * Math.PI * 2;
      cube.position.x = Math.cos(angle) * 7;
      cube.position.z = Math.sin(angle) * 7;
      cubeGroup.add(cube);
      cubes.push(cube);
    }
    cubeGroup.rotation.x = Math.PI / 3;
    mainGroup.add(cubeGroup);

    // Mouse Tracking for Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

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
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y += 0.005;
      mainGroup.rotation.x += 0.002;

      coreMesh.rotation.y -= 0.003;
      cubeGroup.rotation.z += 0.008;

      cubes.forEach((cube) => {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
      });

      // Apply parallax tilting
      mainGroup.rotation.x = mouseY * 0.5 + Math.sin(Date.now() * 0.001) * 0.1;
      mainGroup.rotation.y = mouseX * 0.5 + Date.now() * 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center pointer-events-auto">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-orange-500/[0.05] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
