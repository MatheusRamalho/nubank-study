import { ReactNode } from "react";

export type LinkButtonProps = {
    name?: string;
    link?: string;
    classe?: string;
    isSecondary?: boolean,
    isTertiary?: boolean,
    isQuaternary?: boolean,
    children?: ReactNode;
};