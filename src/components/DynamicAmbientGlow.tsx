'use client';

import React, { useEffect, useState } from 'react';

interface GlowSpot {
  x: number;
  y: number;
  radius: number;
  visible: boolean;
}

export default function DynamicAmbientGlow() {
  const [mounted, setMounted] = useState(false);

  // Single glowing spot state
  const [spot, setSpot] = useState<GlowSpot>({
    x: 40,
    y: 35,
    radius: 160,
    visible: true,
  });

  const getRandomPosition = (prevX?: number, prevY?: number) => {
    let x = Math.floor(Math.random() * 70) + 15; // 15% to 85%
    let y = Math.floor(Math.random() * 70) + 15; // 15% to 85%
    
    // Ensure the new spot is distinctly different from the previous spot
    if (prevX !== undefined && prevY !== undefined) {
      if (Math.abs(x - prevX) < 25 && Math.abs(y - prevY) < 25) {
        x = (x + 35) % 70 + 15;
        y = (y + 35) % 70 + 15;
      }
    }
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const baseRadius = isMobile ? 80 : 145;
    const radiusVar = isMobile ? 20 : 30;
    
    const radius = Math.floor(Math.random() * radiusVar) + baseRadius;
    return { x, y, radius };
  };

  useEffect(() => {
    setMounted(true);

    let isMounted = true;
    let timer: NodeJS.Timeout;

    // Single spot cycle loop
    const runCycle = (currentX: number, currentY: number) => {
      if (!isMounted) return;

      // Phase 1: Stay glowing for 3.6s
      timer = setTimeout(() => {
        if (!isMounted) return;
        // Phase 2: Fade out smoothly back to base white dots
        setSpot(prev => ({ ...prev, visible: false }));

        // Phase 3: After fade out (1.8s), pick new location and fade in
        timer = setTimeout(() => {
          if (!isMounted) return;
          const next = getRandomPosition(currentX, currentY);
          setSpot({ ...next, visible: true });

          // Schedule next cycle
          runCycle(next.x, next.y);
        }, 1800);
      }, 3600);
    };

    // Start cycle
    runCycle(40, 35);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {/* Single active glowing dots region */}
      <div
        className="absolute inset-0 pointer-events-none dot-grid-primary transition-opacity duration-[1800ms] ease-in-out will-change-transform"
        style={{
          opacity: spot.visible ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle ${spot.radius}px at ${spot.x}% ${spot.y}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle ${spot.radius}px at ${spot.x}% ${spot.y}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)`,
        }}
      />
    </div>
  );
}


