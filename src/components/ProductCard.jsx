import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={handleAdd}>Agregar</button>
      <Link to={`/producto/${product.id}`}>Ver</Link>
    </div>
  );
}
