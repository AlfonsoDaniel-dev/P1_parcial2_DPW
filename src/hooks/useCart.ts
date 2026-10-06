import type { Product } from "../types/Product";

import { useState, useMemo } from "react";

interface UseCartReturn {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    total: number;
}


export const useCart = () :UseCartReturn=> {

    const [cart, setCart] = useState<Product[]>([]);

    


    return {

    }
}