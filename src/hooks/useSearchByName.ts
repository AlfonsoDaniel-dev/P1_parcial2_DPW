import { useState } from "react";
import type { Product } from "../types/Product";
import { products } from "../data/data";

interface UseSearchReturn {
    Products: Product[];
    onChange: (searchParameter: string) => void;
    search: (searchParameter: string) => void;
}

export const useSearch = (): UseSearchReturn => {
    const [Products, setProducts] = useState<Product[]>([]);

    const search = (searchParameter: string) => {
        const term = searchParameter.trim().toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(term)
        );
        setProducts([...filteredProducts]);
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
