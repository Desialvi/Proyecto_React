import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>

      {user && <Link to="/carrito">Carrito</Link>}
      {user && <Link to="/admin">Admin</Link>}

      {!user ? (
        <button className="login-btn" onClick={login}>
          Iniciar sesión
        </button>
      ) : (
        <button className="login-btn" onClick={logout}>
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}
