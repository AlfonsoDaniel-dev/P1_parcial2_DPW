import type { Product } from "../types/Product";

import { useState, useMemo } from "react";

export interface CartItem extends Product {
    quantity: number;
}

interface UseCartReturn {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
    total: number;
}


export const useCart = () :UseCartReturn=> {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product, quantity: number = 1): void => {
        setCart((prev: CartItem[]): CartItem[] => {
            const existing: CartItem | undefined = prev.find((item: CartItem): boolean => item.id === product.id);
            if (!existing) {
                return [...prev, { ...product, quantity: Math.min(quantity, product.stock) }];
            }
            return prev.map((item: CartItem): CartItem =>
                item.id === product.id
                    ? { ...item, quantity: Math.min(item.quantity + quantity, item.stock) }
                    : item
            );
        });
    };

    const removeFromCart = (productId: number): void => {
        setCart((prev: CartItem[]): CartItem[] => prev.filter((item: CartItem): boolean => item.id !== productId));
    };

    const increaseQuantity = (productId: number): void => {
        setCart((prev: CartItem[]): CartItem[] =>
            prev.map((item: CartItem): CartItem =>
                item.id === productId && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId: number): void => {
        setCart((prev: CartItem[]): CartItem[] =>
            prev.map((item: CartItem): CartItem =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const clearCart = (): void => {
        setCart([]);
    };

    const total: number = useMemo(
        (): number => cart.reduce((sum: number, item: CartItem): number => sum + item.price * item.quantity, 0),
        [cart]
    );

    return {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
    }
}
