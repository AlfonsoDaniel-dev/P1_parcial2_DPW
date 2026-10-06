
import { useSearch } from "../hooks/useSearchByName";
import { useSearchByCategory } from "../hooks/useSearchByCategory";

import { ProductCard } from "./ProductCard";

export const ProductSearch = () => {
    const { Products, onChange } = useSearch();
    const { ProductsByCategory, categories, onChangeCategory } = useSearchByCategory();

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