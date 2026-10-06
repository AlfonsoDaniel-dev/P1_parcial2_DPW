import { useState } from "react";
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
                        {product.icon} {product.name} - ${product.price} ({product.stock} available)
                    </li>
                ))}
            </ul>
        </div>
    );
};