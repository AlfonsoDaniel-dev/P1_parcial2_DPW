import type { Product } from "../types/Product";

export interface ProductListProps {
    Products: Product[]
}

export const ProductList = (props : ProductListProps) => {
    return (
        <div>
            <ul>
                {props.Products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} width={24} height={24} /> {product.name} - ${product.price} ({product.stock} available)
                    </li>
                ))}
            </ul>
        </div>
    );
};