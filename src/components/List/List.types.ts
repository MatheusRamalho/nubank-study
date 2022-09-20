import { ReactNode } from "react";

export type ListProps = {
    children: ReactNode;
    classe?: string;
    isHorizontal?: boolean;
}

export type ListItemProps = {
    title?: string;
    description?: string;
    children?: ReactNode;
}

export type ListItemActionProps = {
    name?: string;
    link?: string;
    children?: ReactNode;
}
