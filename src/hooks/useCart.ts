import type { Product } from "../types/Product";

import { useState, useMemo } from "react";

interface UseCartReturn {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    total: number;
}


export const useCart = () :UseCartReturn=> {

    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product): void => {
        setCart((prev): Product[] => [...prev, product]);
    };

    const removeFromCart = (productId: number): void => {
        setCart((prev: Product[]): Product[] => {
            const index: number = prev.findIndex((item: Product): boolean => item.id === productId);
            return index === -1
                ? prev
                : prev.filter((_item: Product, i: number): boolean => i !== index);
        });
    };

    const clearCart = (): void => {
        setCart([]);
    };

    const total: number = useMemo(
        (): number => cart.reduce((sum: number, item: Product): number => sum + item.price, 0),
        [cart]
    );

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
    }
}
