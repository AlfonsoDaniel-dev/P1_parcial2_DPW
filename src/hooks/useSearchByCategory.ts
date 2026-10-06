import { useState } from "react";
import type { Product } from "../types/Product";
import { products } from "../data/data";

interface UseSearchByCategoryReturn {
    ProductsByCategory : Product[];
    categories: string[];
    onChangeCategory: (category: string) => void;
}

const categories = Array.from(new Set(products.map(product => product.category)));

export const useSearchByCategory = () : UseSearchByCategoryReturn => {
    const [category, setCategory] = useState<string>("");

    const ProductsByCategory = category
        ? products.filter(product => product.category === category)
        : [];

    return { ProductsByCategory, categories, onChangeCategory: setCategory };
};
