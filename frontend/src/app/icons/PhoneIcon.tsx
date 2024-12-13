import * as React from "react";
import { IconProps } from "./iconTypes";

const PhoneIcon: React.FC<IconProps> = ( { className, ...props }: IconProps ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    className={className}
    {...props}
    >
        <path
        fill="#000"
        d="m2.658.486 1.065-.32a2.51 2.51 0 0 1 3.014 1.373l.824 1.831a2.51 2.51 0 0 1-.578 2.866L5.619 7.507a.23.23 0 0 0-.071.142c-.04.362.205 1.068.771 2.05.412.712.785 1.213 1.102 1.493.22.197.342.239.394.224l1.835-.561a2.51 2.51 0 0 1 2.77.93l1.169 1.622a2.51 2.51 0 0 1-.31 3.29l-.808.767a3.42 3.42 0 0 1-3.275.812c-2.514-.702-4.767-2.824-6.786-6.32C.388 8.454-.322 5.438.332 2.906A3.42 3.42 0 0 1 2.658.487m.395 1.312a2.05 2.05 0 0 0-1.396 1.451c-.55 2.129.08 4.802 1.938 8.022 1.856 3.215 3.854 5.095 5.97 5.687a2.05 2.05 0 0 0 1.964-.488l.81-.766a1.14 1.14 0 0 0 .14-1.497l-1.169-1.62a1.14 1.14 0 0 0-1.26-.423l-1.839.563c-1.068.317-2.037-.542-3.078-2.344-.7-1.214-1.027-2.155-.946-2.886a1.6 1.6 0 0 1 .498-.991L6.05 5.234a1.14 1.14 0 0 0 .263-1.302L5.488 2.1a1.14 1.14 0 0 0-1.369-.625z"
        ></path>
    </svg>
);

export default PhoneIcon;
