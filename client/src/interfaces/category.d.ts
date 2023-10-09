import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
}

export interface CategoryCardProps {
    id?: BaseKey | undefined;
    title: string;
}