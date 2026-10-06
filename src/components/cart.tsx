import type { Product } from "../types/Product";

interface CartProps {
    cart: Product[]
    total: number
    onRemove: (productId: number) => void
    onClear: () => void
}

export const Cart = ({ cart, total, onRemove, onClear }: CartProps) => {
    return (
        <div className="carrito">
            <h2>Cart</h2>

            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={`${item.id}-${index}`}>
                                {item.icon} {item.name} - ${item.price.toLocaleString("es-MX")}
                                <button onClick={() => onRemove(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>

                    <p>Total: ${total.toLocaleString("es-MX")}</p>

                    <button onClick={onClear}>Vaciar carrito</button>
                </>
            )}
        </div>
    );
};
