import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const API_URL = "https://6940ce2e993d68afba6d1053.mockapi.io/products"; 

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setProducts)
      .catch(() => alert("Error al cargar productos"));
  }, []);

  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
