import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet";

export default function Inicio() {
  return (
    <main className="container">
      <Helmet>
        <title>Inicio | eCommerce</title>
      </Helmet>

      <h2>Productos</h2>
      <ProductList />
    </main>
  );
}
