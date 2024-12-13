import * as React from "react";
import { IconProps } from "./iconTypes";

const WalletIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
    >
        <path
        fill="#000"
        d="M12.49 9.128a.684.684 0 1 0 0 1.37h1.37a.685.685 0 0 0 0-1.37zM2.907.913A2.054 2.054 0 0 0 .853 2.967V13.92a3.423 3.423 0 0 0 3.423 3.423h10.269a2.74 2.74 0 0 0 2.738-2.738V6.39a2.74 2.74 0 0 0-1.369-2.372v-.367A2.74 2.74 0 0 0 13.176.913zm0 1.369h10.27a1.37 1.37 0 0 1 1.369 1.37H2.906a.685.685 0 0 1 0-1.37m0 2.738h11.639a1.37 1.37 0 0 1 1.369 1.37v8.215a1.37 1.37 0 0 1-1.37 1.37H4.277a2.054 2.054 0 0 1-2.054-2.055V4.904c.213.075.445.116.684.116"
        ></path>
    </svg>
);

export default WalletIcon;
