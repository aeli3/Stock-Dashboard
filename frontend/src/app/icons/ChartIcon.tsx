import * as React from "react";
import { IconProps } from "./iconTypes";

const ChartIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
    >
        <path
        fill="#000"
        d="M6.791 13.48a.17.17 0 0 0 .242 0l2.178-2.178 1.842 1.844a.17.17 0 0 0 .242 0L16.136 8.3a.17.17 0 0 0 0-.241l-.693-.655c-.066-.066-.27-.199-.336-.133l-3.932 3.937-1.842-1.844a.17.17 0 0 0-.242 0L6.004 12.45a.17.17 0 0 0 0 .242z"
        ></path>
        <path
        fill="#000"
        d="M19.454 4.248h-7.616V2.88a.17.17 0 0 0-.171-.171h-1.198a.17.17 0 0 0-.171.171v1.37H2.68a.684.684 0 0 0-.684.684v11.125c0 .378.306.684.684.684h7.625v.685L6.781 19.74a.17.17 0 0 0-.05.235l.649 1.01v.002c.05.08.158.1.237.05l3.45-2.264 3.452 2.263c.079.052.186.03.237-.049v-.002l.649-1.01a.17.17 0 0 0-.05-.235l-3.517-2.306v-.692h7.616a.684.684 0 0 0 .685-.684V4.933a.684.684 0 0 0-.685-.685M18.6 15.202H3.537V5.79H18.6z"
        ></path>
    </svg>
);

export default ChartIcon;



