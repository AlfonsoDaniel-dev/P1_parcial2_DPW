import type { CartItem } from "../hooks/useCart";

interface CartProps {
    cart: CartItem[]
    total: number
    onRemove: (productId: number) => void
    onIncrease: (productId: number) => void
    onDecrease: (productId: number) => void
    onClear: () => void
}

export const Cart = ({ cart, total, onRemove, onIncrease, onDecrease, onClear }: CartProps) => {
    return (
        <div className="carrito">
            <h2>Cart</h2>

            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <span className="carrito_nombre">
                                    <img src={item.image} alt={item.name} width={32} height={32} /> {item.name} - ${item.price.toLocaleString("es-MX")}
                                </span>

                                <div className="cantidad">
                                    <button type="button" onClick={() => onDecrease(item.id)} disabled={item.quantity <= 1} aria-label="Reducir cantidad">−</button>
                                    <span>{item.quantity}</span>
                                    <button type="button" onClick={() => onIncrease(item.id)} disabled={item.quantity >= item.stock} aria-label="Aumentar cantidad">+</button>
                                </div>

                                <span className="carrito_subtotal">
                                    ${(item.price * item.quantity).toLocaleString("es-MX")}
                                </span>

                                <button className="carrito_eliminar" onClick={() => onRemove(item.id)}>Eliminar</button>
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
