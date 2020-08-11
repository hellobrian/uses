import React from "react";

/**
 * Resize with CSS by setting height: auto and width to a px size (or vice versa)
 */
function YuzuIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="55"
      fill="none"
      viewBox="0 0 41 55"
      {...props}
    >
      <path
        fill="#FFD600"
        d="M41 35.09c0 10.65-9.178 19.285-20.5 19.285S0 45.74 0 35.089c0-10.65 9.178-19.285 20.5-19.285S41 24.438 41 35.089z"
      ></path>
      <path
        fill="#1EC965"
        d="M15.537 30.11c-.222-14.89 2.557-21.72 17.366-28.743 4.216 15.94-.826 21.702-17.366 28.743z"
      ></path>
    </svg>
  );
}

export default YuzuIcon;
