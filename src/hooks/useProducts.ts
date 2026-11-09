import { useEffect, useState } from "react";
import { adaptProduct } from "../types/Product";
import type { ApiProduct, Product } from "../types/Product";

const API_URL = "https://fakestoreapi.com/products";

interface UseProductsReturn {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export const useProducts = (): UseProductsReturn => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const loadProducts = async (): Promise<void> => {

            try {

                const response = await fetch(API_URL);

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const data: ApiProduct[] = await response.json();

                setProducts(data.map(adaptProduct));

            } catch (e) {

                setError((e as Error).message);

            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading, error };
};
