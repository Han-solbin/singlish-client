import React from "react";
import { COLOR } from "../../constants";
const Singlishlogo = ({ size = 24, color = COLOR.BRANDCOLOR }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM7.79998 11.4C8.46272 11.4 8.99998 10.8627 8.99998 10.2C8.99998 9.53726 8.46272 9 7.79998 9C7.13723 9 6.59998 9.53726 6.59998 10.2C6.59998 10.8627 7.13723 11.4 7.79998 11.4ZM15.9 11.4C16.5627 11.4 17.1 10.8627 17.1 10.2C17.1 9.53726 16.5627 9 15.9 9C15.2373 9 14.7 9.53726 14.7 10.2C14.7 10.8627 15.2373 11.4 15.9 11.4ZM11.85 19.2C14.5838 19.2 16.8 17.051 16.8 14.4L11.85 14.4L6.90002 14.4C6.90002 17.051 9.11621 19.2 11.85 19.2Z"
      fill={color}
    />
  </svg>
);
export default Singlishlogo;
