import * as React from 'react';

function Glow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="675" height="675" viewBox="0 0 675 675" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="675" height="675" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="146"
          y1="1.82607e-06"
          x2="456.551"
          y2="322.391"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#773EEC" stopOpacity="0.35" />
          <stop offset="0.828125" stopColor="#1E1A1B" stopOpacity="0" />
          <stop offset="1" stopColor="#272727" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Glow;
