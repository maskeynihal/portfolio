import * as React from 'react';

function Vue(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="104" height="83" viewBox="0 0 104 83" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M83.0287 0.285065H103.786L51.8929 82.1735L0 0.285065H39.6981L51.8929 19.2737L63.8283 0.285065H83.0287Z"
          fill="#41B883"
          fillOpacity="0.45"
        />
        <path
          d="M0 0.285065L51.8929 82.1735L103.786 0.285065H83.0287L51.8929 49.4181L20.4977 0.285065H0Z"
          fill="#41B883"
          fillOpacity="0.45"
        />
        <path
          d="M20.498 0.285065L51.8933 49.6555L83.029 0.285065H63.8286L51.8933 19.2737L39.6984 0.285065H20.498Z"
          fill="#35495E"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="103.786" height="81.9626" fill="white" transform="translate(0 0.285065)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Vue;
