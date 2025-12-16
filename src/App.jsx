import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import Admin from "./pages/Admin";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  return (
    <HashRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/carrito"
          element={user ? <Carrito /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/" />}
        />
      </Routes>

      <Footer />

      {/* ✅ Toastify SIEMPRE al final */}
      <ToastContainer position="top-right" autoClose={3000} />
    </HashRouter>
  );
}
