import { Helmet } from "react-helmet";

export default function Admin() {
  return (
    <main className="container">
      <Helmet>
        <title>Admin | eCommerce</title>
      </Helmet>

      <h2>Panel de Administración</h2>
      <p>Gestión de productos (CRUD)</p>
    </main>
  );
}
