import { ReactNode } from "react";

export type NavbarProps = {
    isActive?: boolean;
    children?: ReactNode;
}

export type NavItemProps = {
    name?: string;
    link?: string;
    children?: ReactNode;
    isVariation?: boolean;
    classe?: string;
}

