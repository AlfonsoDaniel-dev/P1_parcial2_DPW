
import { useSearch } from "../hooks/useSearchByName";
import { useSearchByCategory } from "../hooks/useSearchByCategory";

import { ProductCard } from "./ProductCard";

import type { Product } from "../types/Product";

interface ProductSearchProps {
    products: Product[]
}

export const ProductSearch = ({ products }: ProductSearchProps) => {
    const { Products, onChange } = useSearch(products);
    const { ProductsByCategory, categories, onChangeCategory } = useSearchByCategory(products);

    return (
        <>
            <label htmlFor="search">Search by name</label>
            <input id="search" onChange={(e) => onChange(e.target.value)} placeholder="Search products..." type="text"/>
            <div className="products">
                {Products.map(product => (
                <ProductCard key={product.id} {...product} id={product.id} />
                ))}
            </div>

            <label htmlFor="category">Search by category</label>
            <div className="category-options">
                <select id="category" onChange={(e) => onChangeCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                {ProductsByCategory.map(product => (
                    <ProductCard key={product.id} {...product} id={product.id} />
                ))}
            </div>
        </>
    );
}