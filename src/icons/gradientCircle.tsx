import * as React from 'react';

function GradientCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="100" rx="50" fill="url(#paint1_linear)" />
      <defs>
        <linearGradient id="paint1_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8363C8" stopOpacity="0.85" />
          <stop offset="0.338542" stopColor="#8758EA" stopOpacity="0.34" />
          <stop offset="0.473958" stopColor="#8655ED" stopOpacity="0.15" />
          <stop offset="0.619792" stopColor="#8553F0" stopOpacity="0.04" />
          <stop offset="0.770833" stopColor="#844DF6" stopOpacity="0" />
          <stop offset="0.994792" stopColor="#8246FE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientCircle;
