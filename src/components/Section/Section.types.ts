import { ReactNode } from "react";

export type SectionProps = {
    id: string;
    legend: string;
    children?: ReactNode;
    classe?: string;
}