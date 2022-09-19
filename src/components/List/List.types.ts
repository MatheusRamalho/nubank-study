import { ReactNode } from "react";

export type ListProps = {
    children: ReactNode;
}

export type ListItemProps = {
    title?: string;
    description?: string;
    children?: ReactNode;
}