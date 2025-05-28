import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type BeerTypes = {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    available_quantity: number;
    alcohol_grade: number;
    volume: number;
    origin: string;
    barcode: string;
};

export interface BeerContentProps {
    beer: BeerTypes;
    selectedQuantity: number;
    onQuantityChange: (increment: boolean) => void;
    description: string;
    containerStyle?: object;
    imageStyle?: ImageStyle;
}

export interface BeerInfoTypes {
    item: {
        name: string;
        brand: string;
        price: number | string;
    };
    styles?: {
        container?: ViewStyle;
        name?: TextStyle;
        type?: TextStyle;
        price?: TextStyle;
    };
}
