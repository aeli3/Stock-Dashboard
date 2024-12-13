import * as React from "react";
import { IconProps } from "./iconTypes";

const HomeIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
    >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.369"
      d="M6.33 13.041h5.476m1.826 3.652H4.504A3.65 3.65 0 0 1 .853 13.04V7.298a3.65 3.65 0 0 1 1.759-3.123L7.176 1.41a3.65 3.65 0 0 1 3.784 0l4.564 2.766a3.65 3.65 0 0 1 1.76 3.122v5.744a3.65 3.65 0 0 1-3.652 3.652"
    ></path>
  </svg>
);

export default HomeIcon;
