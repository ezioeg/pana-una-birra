export interface CartItemTypes {
    id: string;
    name: string;
    price: number;
    brand: string;
    image: string;
    quantity: number;
    addedBy: string;
}

export interface CartItemTypesProps {
    item: {
        id: string;
        image: string;
        name: string;
        brand: string;
        price: number;
        quantity: number;
        addedBy: string;
    };
    onUpdateQuantity: (id: string, increment: boolean) => void;
    onRemove: (id: string) => void;
}

export interface CartStateTypes {
    items: CartItemTypes[];
    totalQuantity: number;
    loading: boolean;
    error: string | null;
}
