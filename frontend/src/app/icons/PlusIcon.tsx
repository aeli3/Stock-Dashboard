import * as React from "react";
import { IconProps } from "./iconTypes";

const PlusIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
    >
    <path
      fill="#000"
      d="M6.112 11.887a.644.644 0 0 0 1.289 0v-4.51h4.51a.644.644 0 0 0 0-1.29h-4.51v-4.51a.644.644 0 1 0-1.289 0v4.51h-4.51a.644.644 0 1 0 0 1.29h4.51z"
    ></path>
  </svg>
);

export default PlusIcon;