import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    description: string;
    productType: string;
    location: string;
    price: number | undefined;
}

export interface ProductCardProps {
    id?: BaseKey | undefined;
    title: string;
    location: string;
    price: string;
    photo: string;
}