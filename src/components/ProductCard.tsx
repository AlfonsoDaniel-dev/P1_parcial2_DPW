interface ProductCardProps {
    id: number
    image: string
    name: string
    category: string
    price: number
    stock: number
    onAdd?: () => void
}

export const ProductCard = ({ image, name, category, price, stock, onAdd }: ProductCardProps) => {
    return (
        <article className="producto">

            <div className="producto_icono">
                <img src={image} alt={name} loading="lazy" />
            </div>

            <p className="producto_categoria">{category}</p>

            <h3>{name}</h3>

            <p className="producto_precio">
                ${price.toLocaleString("es-MX")}
            </p>

            <p className="producto_stock">
                Stock: {stock}
            </p>


            <button onClick={onAdd} disabled={stock === 0}>
                agregar al carrito
            </button>
        </article>
    )
}
