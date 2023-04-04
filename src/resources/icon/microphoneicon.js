import React from "react";
import { COLOR } from "../../constants";
const Microphoneicon = ({ size = 24, color = COLOR.GRAY100 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8" />
  </svg>
);
export default Microphoneicon;
