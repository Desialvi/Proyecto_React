import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, clearCart, removeFromCart } = useCart();

  const total = cart.reduce((acc, p) => acc + p.price, 0);

  return (
    <main className="container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos</p>
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

          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </main>
  );
}
