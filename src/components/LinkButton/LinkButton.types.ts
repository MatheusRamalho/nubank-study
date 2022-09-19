import { ReactNode } from "react";

export type LinkButtonProps = {
    name?: string;
    link?: string;
    isSecondary?: boolean,
    isTertiary?: boolean,
    children?: ReactNode;
};