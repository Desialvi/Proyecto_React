import React from 'react'

export default function Carrito({ cart, setCart }) {
  const total = cart.reduce((s, i) => s + i.price, 0);

  const limpiarCarrito = () => {
    setCart([]); // Vacía el carrito
  };

  return (
    <main style={{ padding: "20px" }}>
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul>
            {cart.map((it, i) => (
              <li key={i}>
                {it.title} - ${it.price}
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={limpiarCarrito} style={{ backgroundColor: "magenta" }}>
            🧹 Limpiar carrito
          </button>
        </>
      )}
    </main>
  );
}