import * as React from 'react';

function CurveLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 480" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 285.151C0 285.151 102.964 330.626 200.43 272.158C297.897 213.69 385.648 150.714 506.324 158.72C627 166.726 673 216.665 817.5 237.5C962 258.335 1076.13 180.208 1157.6 121.24C1264.56 43.8222 1307.05 28.0963 1351.03 11.3C1395.02 -5.49633 1440 3.30438 1440 3.30438"
        stroke="#773EEC"
        strokeWidth="2"
      />
      <path
        d="M200.43 274.158C102.964 332.626 0 287.151 0 287.151L0 473H1440V5.30438C1440 5.30438 1395.02 -3.49633 1351.03 13.3L1349.28 13.9674C1305.91 30.524 1263.14 46.8482 1157.6 123.24C1076.13 182.208 962 260.335 817.5 239.5C673 218.665 627 168.726 506.324 160.72C385.648 152.714 297.897 215.69 200.43 274.158Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="733.5" y1="9.5" x2="803" y2="454.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#773EEC" stopOpacity="0.4" />
          <stop offset="0.828125" stopColor="#1E1A1B" stopOpacity="0" />
          <stop offset="1" stopColor="#272727" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CurveLine;
