import * as React from "react";
import { IconProps } from "./iconTypes";

const ThunderIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
  >
    <path
      fill="#1C1C1C"
      fillRule="evenodd"
      d="M12.47 23.28c6.406 0 11.599-5.193 11.599-11.599C24.069 5.276 18.876.083 12.47.083S.873 5.276.873 11.681 6.065 23.28 12.47 23.28m.986-18.364a.322.322 0 0 0-.584-.187l-5.495 7.693c-.153.213 0 .51.262.51h3.24v5.438c0 .313.402.442.584.187l5.495-7.693a.322.322 0 0 0-.262-.51h-3.24z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ThunderIcon;
