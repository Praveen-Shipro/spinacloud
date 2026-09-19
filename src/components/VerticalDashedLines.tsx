'use client';

import { usePathname } from 'next/navigation';

export default function VerticalDashedLines() {
  const pathname = usePathname();

  // Hide dashed lines on the homepage
  if (pathname === '/') return null;

  return (
    <div className="hidden lg:flex fixed inset-0 pointer-events-none justify-center z-40 ">
      <div className="w-full max-w-6xl 2xl:max-w-7xl h-full relative ">
        <div
          className="absolute top-0 left-0 h-full w-0.5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg width='1' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='1' y1='0' x2='1' y2='100%25' stroke='%23d4d4d4' stroke-opacity='0.5' stroke-width='1' stroke-dasharray='10%2c 14' stroke-linecap='square'/%3e%3c/svg%3e\")", backgroundRepeat: 'repeat-y' }}
        />
        <div
          className="absolute top-0 right-0 h-full w-0.5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg width='1' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='1' y1='0' x2='1' y2='100%25' stroke='%23d4d4d4' stroke-opacity='0.5' stroke-width='1' stroke-dasharray='10%2c 14' stroke-linecap='square'/%3e%3c/svg%3e\")", backgroundRepeat: 'repeat-y' }}
        />
      </div>
    </div>
  );
}
