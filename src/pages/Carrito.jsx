import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, clearCart } = useCart();

  return (
    <main className="container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <>
          <ul>
            {cart.map((p, i) => (
              <li key={i}>{p.title} - ${p.price}</li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </main>
  );
}
