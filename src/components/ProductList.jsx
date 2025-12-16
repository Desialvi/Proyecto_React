import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 6;

  useEffect(() => {
    fetch("https://YOUR_MOCKAPI/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => alert("Error al cargar productos"));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <>
      <input
        className="search-input"
        placeholder="Buscar productos..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <div className="product-list">
        {current.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>◀</button>
        <span>{page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>▶</button>
      </div>
    </>
  );
}