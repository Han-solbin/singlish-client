import React from "react";
import { COLOR } from "../../constants";
const Checkicon = ({
  size = 24,
  isChecked = false,
  checkedColor = COLOR.BRANDCOLOR,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={isChecked ? checkedColor : COLOR.WHITE}
    stroke={COLOR.WHITE}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
export default Checkicon;
