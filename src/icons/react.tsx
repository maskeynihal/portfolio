import * as React from 'react';

function ReactJs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="95" height="83" viewBox="0 0 95 83" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M77.8309 26.8238C76.8234 26.4878 75.8075 26.1765 74.7839 25.8902C74.9559 25.2072 75.1141 24.5325 75.2547 23.8696C77.5613 12.984 76.0534 4.21436 70.9028 1.32697C65.9645 -1.44106 57.8883 1.44524 49.7318 8.34628C48.928 9.02763 48.142 9.72861 47.3745 10.4486C46.8608 9.96981 46.338 9.50036 45.8063 9.04045C37.2579 1.66165 28.6896 -1.44825 23.5445 1.4474C18.6107 4.22406 17.1497 12.4681 19.2263 22.7846C19.4329 23.8064 19.6662 24.8229 19.9259 25.8331C18.7131 26.1681 17.5428 26.5247 16.4227 26.9043C6.40039 30.3015 0 35.6251 0 41.1471C0 46.8504 6.87112 52.5709 17.3098 56.0395C18.1561 56.3196 19.0094 56.5791 19.869 56.8178C19.5898 57.9059 19.342 59.0013 19.1258 60.1028C17.146 70.2403 18.692 78.2895 23.6126 81.0486C28.6947 83.8978 37.2246 80.9695 45.5301 73.911C46.2036 73.3371 46.8622 72.747 47.5054 72.1412C48.3365 72.9208 49.1898 73.6777 50.0643 74.411C58.1098 81.1413 66.0555 83.859 70.9712 81.0924C76.0486 78.2349 77.6989 69.5878 75.5564 59.0675C75.3876 58.2433 75.1983 57.4232 74.9888 56.6079C75.5878 56.4353 76.1758 56.2578 76.7489 56.073C87.601 52.5777 94.6618 46.9266 94.6618 41.1471C94.6618 35.605 88.0547 30.2454 77.8309 26.8238ZM75.4773 52.3415C74.9596 52.508 74.4286 52.6686 73.8872 52.825C72.6892 49.1378 71.0725 45.2172 69.0939 41.1662C70.9819 37.2119 72.5365 33.3413 73.7009 29.6781C74.6693 29.9506 75.6089 30.2379 76.5148 30.5409C85.2748 33.4729 90.618 37.8072 90.618 41.1471C90.618 44.7046 84.8473 49.3229 75.4773 52.3415ZM71.5895 59.831C72.5368 64.4828 72.6718 68.6887 72.0443 71.977C71.4808 74.9316 70.347 76.9012 68.9449 77.6903C65.9619 79.3691 59.5822 77.187 52.7018 71.4309C51.8885 70.7491 51.0948 70.0454 50.3216 69.3207C52.9892 66.4847 55.6549 63.1879 58.2566 59.5262C62.8329 59.1315 67.1563 58.4858 71.077 57.6047C71.27 58.3622 71.4416 59.1049 71.5895 59.831ZM32.2723 77.4002C29.3577 78.4006 27.0363 78.4294 25.633 77.6428C22.6471 75.9687 21.4058 69.5055 23.099 60.8362C23.3002 59.8117 23.5307 58.7929 23.7901 57.7809C27.6675 58.6149 31.9595 59.2145 36.5465 59.5762C39.166 63.1591 41.9086 66.4524 44.6726 69.3362C44.0852 69.8888 43.4839 70.4272 42.8692 70.951C39.1963 74.072 35.5159 76.2865 32.2723 77.4002ZM18.6181 52.3196C14.0022 50.7857 10.1902 48.7923 7.57738 46.6171C5.22933 44.6626 4.0442 42.7217 4.0442 41.1471C4.0442 37.796 9.18293 33.5217 17.7539 30.6167C18.7941 30.2645 19.8827 29.9319 21.0123 29.6199C22.1971 33.3657 23.7509 37.2823 25.626 41.2428C23.7265 45.2618 22.1505 49.241 20.9543 53.031C20.1697 52.8125 19.3907 52.5753 18.6181 52.3196ZM23.1951 22.0294C21.4161 13.1907 22.5975 6.52333 25.5709 4.84993C28.7376 3.0676 35.7404 5.6088 43.1214 11.9803C43.6027 12.3967 44.0762 12.8216 44.5417 13.2547C41.7913 16.1259 39.0739 19.3947 36.4777 22.9565C32.0256 23.3577 27.764 24.0019 23.8459 24.865C23.6045 23.9254 23.3875 22.98 23.1951 22.0297V22.0294ZM64.028 31.8318C63.1025 30.2777 62.1427 28.7432 61.1493 27.2293C64.1696 27.6007 67.0635 28.0935 69.7809 28.696C68.9652 31.2383 67.9483 33.896 66.7514 36.6209C65.8765 35.007 64.9685 33.4104 64.028 31.8318ZM47.3764 16.0644C49.2415 18.029 51.1096 20.2222 52.947 22.602C49.2197 22.4309 45.4862 22.4302 41.7588 22.5999C43.598 20.242 45.482 18.0517 47.3764 16.0644ZM30.6179 31.8588C29.6892 33.4246 28.7981 35.0113 27.9456 36.6176C26.7682 33.9024 25.7606 31.2325 24.9378 28.6543C27.6387 28.0669 30.5188 27.5866 33.5199 27.2221C32.5154 28.7453 31.5478 30.2911 30.6179 31.8584V31.8588ZM33.6061 55.3518C30.5055 55.0154 27.5821 54.5599 24.882 53.9883C25.7177 51.3641 26.7475 48.6374 27.9504 45.864C28.8063 47.4714 29.7011 49.0591 30.6338 50.6257C31.593 52.2362 32.5862 53.8136 33.6061 55.3518ZM47.4881 66.5067C45.5712 64.4964 43.6594 62.2723 41.7924 59.8803C43.6051 59.9493 45.4528 59.9845 47.3309 59.9845C49.2604 59.9845 51.1677 59.9425 53.045 59.8612C51.2017 62.2964 49.3406 64.5238 47.4881 66.5067ZM66.7895 45.7223C68.0548 48.5263 69.1212 51.2386 69.968 53.8179C67.2236 54.4269 64.2602 54.9172 61.1378 55.2814C62.1384 53.7394 63.1072 52.1782 64.0439 50.5987C64.9962 48.9933 65.9116 47.3674 66.7895 45.7223ZM60.541 48.6345C59.1071 51.0561 57.5926 53.4318 55.9999 55.7577C53.1147 55.9564 50.2232 56.055 47.3309 56.0536C44.3849 56.0536 41.5196 55.9644 38.7603 55.7904C37.126 53.4699 35.5826 51.0901 34.1333 48.6561H34.1337C32.6913 46.235 31.344 43.7615 30.0947 41.241C31.3408 38.7199 32.684 36.2452 34.1215 33.8223L34.1211 33.8226C35.5581 31.3991 37.0892 29.0294 38.7111 26.7188C41.5262 26.5118 44.413 26.4039 47.3305 26.4039H47.3309C50.2617 26.4039 53.1522 26.5129 55.9666 26.7214C57.5722 29.0285 59.0935 31.39 60.5277 33.8014C61.97 36.219 63.331 38.6816 64.6085 41.1853C63.3441 43.7145 61.9874 46.1992 60.541 48.6345ZM68.8831 4.73274C72.0528 6.51003 73.2856 13.6771 71.294 23.0758C71.1668 23.6754 71.0241 24.2862 70.8688 24.9056C66.9411 24.0241 62.6765 23.3688 58.2115 22.9615C55.6105 19.3605 52.9152 16.0867 50.2096 13.2525C50.9187 12.588 51.6446 11.9408 52.3868 11.3113C59.3755 5.39886 65.9072 3.06436 68.8831 4.73274ZM47.3309 32.9293C51.9993 32.9293 55.7839 36.6086 55.7839 41.1471C55.7839 45.6856 51.9993 49.365 47.3309 49.365C42.6625 49.365 38.8779 45.6856 38.8779 41.1471C38.8779 36.6086 42.6625 32.9293 47.3309 32.9293Z"
          fill="#00D8FF"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="94.6618" height="81.9626" fill="white" transform="translate(0 0.285065)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ReactJs;
