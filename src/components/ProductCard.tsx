interface ProductCardProps {
    id: number
    icon: string
    name: string
    category: string
    price: number
    stock: number
}

export const ProductCard = ({ icon, name, category, price, stock }: ProductCardProps) => {
    return (
        <article className="producto">

            <div className="producto_icono">{icon}</div>

            <p className="producto_categoria">{category}</p>

            <h3>{name}</h3>

            <p className="producto_precio">
                ${price.toLocaleString("es-MX")}
            </p>

            <p className="producto_stock">
                Stock: {stock}
            </p>


            <button>
                agregar al carrito
            </button>
        </article>
    )
}
