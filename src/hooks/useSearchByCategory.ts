import { useMemo, useState } from "react";
import type { Product } from "../types/Product";

interface UseSearchByCategoryReturn {
    ProductsByCategory : Product[];
    categories: string[];
    onChangeCategory: (category: string) => void;
}

export const useSearchByCategory = (products: Product[]) : UseSearchByCategoryReturn => {
    const [category, setCategory] = useState<string>("");

    const categories = useMemo(
        () => Array.from(new Set(products.map(product => product.category))),
        [products]
    );

    const ProductsByCategory = category
        ? products.filter(product => product.category === category)
        : [];

    return { ProductsByCategory, categories, onChangeCategory: setCategory };
};
