import { useState } from "react";
import type { Product } from "../types/Product";

interface UseSearchReturn {
    Products: Product[];
    onChange: (searchParameter: string) => void;
    search: (searchParameter: string) => void;
}

export const useSearch = (products: Product[]): UseSearchReturn => {
    const [Products, setProducts] = useState<Product[]>([]);

    const search = (searchParameter: string) => {
        const term = searchParameter.trim().toLowerCase();
        setProducts(products.filter(product =>
            product.name.toLowerCase().includes(term)
        ));
    };

    const onChange = (searchParameter: string) => {
        search(searchParameter);
    };

    return {
        Products,
        onChange,
        search,
    };
};
