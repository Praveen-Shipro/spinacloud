const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Prepare SVG canvas overlay
  const svgGraphic = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orangeGlow" cx="80%" cy="20%" r="55%">
          <stop offset="0%" stop-color="#FF5722" stop-opacity="0.30" />
          <stop offset="50%" stop-color="#FF5722" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#080808" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="blueGlow" cx="20%" cy="80%" r="50%">
          <stop offset="0%" stop-color="#0284C7" stop-opacity="0.22" />
          <stop offset="50%" stop-color="#0369A1" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#080808" stop-opacity="0" />
        </radialGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="1.2" fill="rgba(255, 255, 255, 0.14)" />
        </pattern>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF5722" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#EA580C" stop-opacity="0.08" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF5722" stop-opacity="1" />
          <stop offset="30%" stop-color="#FF5722" stop-opacity="0.6" />
          <stop offset="70%" stop-color="#38BDF8" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.1" />
        </linearGradient>
      </defs>

      <!-- Deep Dark Background -->
      <rect width="${width}" height="${height}" fill="#080808" />
      
      <!-- Ambient Glows -->
      <rect width="${width}" height="${height}" fill="url(#orangeGlow)" />
      <rect width="${width}" height="${height}" fill="url(#blueGlow)" />
      
      <!-- Grid Dots -->
      <rect width="${width}" height="${height}" fill="url(#grid)" />

      <!-- Outer glowing border -->
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />

      <!-- Top Pill Badge -->
      <g transform="translate(80, 75)">
        <rect width="285" height="38" rx="19" fill="url(#badgeGrad)" stroke="rgba(255, 87, 34, 0.45)" stroke-width="1.2" />
        <circle cx="20" cy="19" r="4.5" fill="#FF5722" />
        <text x="36" y="24" fill="#FF8A65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">NEXT-GEN CLOUD PLATFORM</text>
      </g>

      <!-- Main Headline -->
      <text x="80" y="295" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" letter-spacing="-0.5">
        Next Generation Cloud
      </text>
      <text x="80" y="352" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" letter-spacing="-0.5">
        Infrastructure &amp; Compute
      </text>

      <!-- Subtitle -->
      <text x="80" y="410" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400">
        Spin up high-frequency cloud resources, bare metal &amp; WP Cloud in seconds.
      </text>

      <!-- Horizontal Divider -->
      <rect x="80" y="458" width="1040" height="2" fill="url(#lineGrad)" />

      <!-- Feature Badges at bottom -->
      <g transform="translate(80, 492)">
        <!-- Feature 1 -->
        <rect x="0" y="0" width="170" height="46" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <text x="20" y="28" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600">⚡ Bare Metal</text>

        <!-- Feature 2 -->
        <rect x="185" y="0" width="180" height="46" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <text x="205" y="28" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600">🛡️ Private Cloud</text>

        <!-- Feature 3 -->
        <rect x="380" y="0" width="180" height="46" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <text x="400" y="28" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600">🚀 WP Cloud</text>

        <!-- Feature 4 -->
        <rect x="575" y="0" width="200" height="46" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <text x="595" y="28" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600">🌐 99.99% Uptime</text>

        <!-- Domain mark on right -->
        <text x="910" y="30" fill="#FF7A00" font-family="Courier, monospace" font-size="20" font-weight="700" letter-spacing="1">spinacloud.in</text>
      </g>
    </svg>
  `);

  // 2. Resize the logo
  const logoBuffer = await sharp(path.join(__dirname, '../src/assets/images/logo-white.png'))
    .resize({ width: 340 })
    .toBuffer();

  // 3. Composite everything together
  const outputPath = path.join(__dirname, '../public/og-image.png');
  await sharp(svgGraphic)
    .composite([
      {
        input: logoBuffer,
        top: 140,
        left: 80,
      },
    ])
    .png({ quality: 95 })
    .toFile(outputPath);

  // Copy to src/app/opengraph-image.png and src/app/twitter-image.png
  const appOgPath = path.join(__dirname, '../src/app/opengraph-image.png');
  const appTwitterPath = path.join(__dirname, '../src/app/twitter-image.png');
  fs.copyFileSync(outputPath, appOgPath);
  fs.copyFileSync(outputPath, appTwitterPath);

  console.log('Successfully generated OG thumbnails:');
  console.log(' -', outputPath);
  console.log(' -', appOgPath);
  console.log(' -', appTwitterPath);
}

createOgImage().catch((err) => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
