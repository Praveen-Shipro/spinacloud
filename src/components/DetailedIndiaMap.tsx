'use client';

import React, { useEffect, useState } from 'react';
import * as d3 from 'd3-geo';

const cities = [
  { name: 'Belagavi', coords: [74.5139, 15.8497] as [number, number], isHub: true },
  { name: 'Delhi', coords: [77.2090, 28.6139] as [number, number] },
  { name: 'Mumbai', coords: [72.8777, 19.0760] as [number, number] },
  { name: 'Bangalore', coords: [77.5946, 12.9716] as [number, number] },
  { name: 'Chennai', coords: [80.2707, 13.0827] as [number, number] },
  { name: 'Kolkata', coords: [88.3639, 22.5726] as [number, number] },
  { name: 'Hyderabad', coords: [78.4867, 17.3850] as [number, number] },
  { name: 'Ahmedabad', coords: [72.5714, 23.0225] as [number, number] }
];

export default function DetailedIndiaMap() {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/assets/india.geojson')
      .then(res => res.json())
      .then(data => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading geojson', err);
        setLoading(false);
      });
  }, []);

  if (loading || !geoData) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-primary mt-4 font-mono text-sm">Loading Map Data...</p>
        </div>
      </div>
    );
  }

  // Setup projection
  const width = 800;
  const height = 800;
  const projection = d3.geoMercator().fitSize([width, height], geoData);
  const pathGenerator = d3.geoPath().projection(projection);

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative flex items-center justify-center overflow-hidden bg-transparent">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full max-w-full drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
        <g>
          {geoData.features.map((feature: any, i: number) => (
            <path
              key={i}
              d={pathGenerator(feature) || ''}
              fill="#121212"
              stroke="#ff6b00"
              strokeWidth={0.5}
              strokeOpacity={0.4}
              className="transition-colors hover:fill-[#1a1a1a] duration-500"
            />
          ))}
        </g>
        
        {/* Draw connecting lines from Belagavi (HQ) to others */}
        {(() => {
          const belagavi = cities.find(c => c.isHub);
          if (!belagavi) return null;
          const [startX, startY] = projection(belagavi.coords) || [0, 0];
          
          return cities.filter(c => !c.isHub).map((city, i) => {
            const [endX, endY] = projection(city.coords) || [0, 0];
            // SVG curve path
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2 - 50; // curve upwards
            const pathData = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
            
            return (
              <g key={`conn-${i}`}>
                {/* Static faint line */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1}
                  strokeOpacity={0.15}
                  strokeDasharray="4 4"
                />
                {/* Animated glowing line representing data transfer */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#ff6b00"
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  strokeLinecap="round"
                  strokeDasharray="8 24"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="32;0" 
                    dur="1.5s" 
                    repeatCount="indefinite" 
                  />
                </path>
              </g>
            );
          });
        })()}

        {/* Draw city nodes */}
        {cities.map((city, i) => {
          const [x, y] = projection(city.coords) || [0, 0];
          return (
            <g key={`city-${i}`} transform={`translate(${x}, ${y})`}>
              <circle 
                r={city.isHub ? 6 : 4} 
                fill={city.isHub ? "#ff6b00" : "#ffffff"} 
              />
              <circle 
                r={city.isHub ? 14 : 8} 
                fill={city.isHub ? "#ff6b00" : "#ffffff"} 
                opacity="0.3"
              >
                <animate 
                  attributeName="r" 
                  values={city.isHub ? "6;18;6" : "4;10;4"} 
                  dur="2s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0.6;0;0.6" 
                  dur="2s" 
                  repeatCount="indefinite" 
                />
              </circle>
              <text 
                y={city.isHub ? -12 : -8} 
                textAnchor="middle" 
                fill={city.isHub ? "#ff6b00" : "#ffffff"} 
                fontSize={city.isHub ? "16" : "12"}
                fontWeight={city.isHub ? "bold" : "normal"}
                opacity="0.9"
                className="font-sans pointer-events-none drop-shadow-md"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
