import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div className="carrito">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((p, i) => (
              <li key={i}>
                {p.title} - ${p.price}
                <button onClick={() => removeFromCart(i)}>❌</button>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}
