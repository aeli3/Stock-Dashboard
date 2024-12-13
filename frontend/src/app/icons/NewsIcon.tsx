import * as React from "react";
import { IconProps } from "./iconTypes";

const NewsIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
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
      strokeWidth="1.289"
      d="M15.458 15.756H2.678A1.826 1.826 0 0 1 .853 13.93V2.977A1.826 1.826 0 0 1 2.678 1.15h9.128a1.825 1.825 0 0 1 1.826 1.826v.912m1.826 11.867a1.826 1.826 0 0 1-1.826-1.826V3.89m1.826 11.866a1.826 1.826 0 0 0 1.825-1.826V5.715a1.826 1.826 0 0 0-1.825-1.826h-1.826M9.981 1.151H6.329M4.504 12.105H9.98M4.504 4.802H9.98v3.652H4.504z"
    ></path>
  </svg>
);

export default NewsIcon;
