import * as React from 'react';

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="12" height="78" viewBox="0 0 12 78" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d)">
        <line x1="2.5" y1="70.0037" x2="2.5" y2="0.996414" stroke="url(#paint0_linear)" strokeWidth="5" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0.99646"
          width="12"
          height="76.0072"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="7" dy="7" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.510078 0 0 0 0 0.273854 0 0 0 0 0.995833 0 0 0 0.72 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paint0_linear" x1="5" y1="35.5" x2="6" y2="35.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A63DE" stopOpacity="0.85" />
          <stop offset="0.713542" stopColor="#773EEC" />
          <stop offset="0.994792" stopColor="#8246FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Line;
