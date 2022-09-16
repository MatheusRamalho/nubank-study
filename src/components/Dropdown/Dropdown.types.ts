import { ReactNode } from "react";

export type DropdownProps = {
    children?: ReactNode;
    isActive?: boolean;
}

export type DropdownItemProps = {
    name: string;
    link?: string;
}