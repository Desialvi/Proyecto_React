import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Carrito from './pages/Carrito'
import ProductDetail from './components/ProductDetail'

export default function App(){
  const [cart, setCart] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const addToCart = (product) => setCart(prev => [...prev, product])
  const toggleLogin = () => setIsLoggedIn(v => !v)

  return (
    <BrowserRouter>
      <Header />
      <Nav isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

      <Routes>
        <Route path="/" element={<Inicio addToCart={addToCart} />} />
        <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />

        {/* Ruta protegida ejemplo */}
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <div style={{padding:20}}>
                <h2>Panel Admin</h2>
                <p>Contenido protegido</p>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="*" element={<div style={{padding:20}}><h2>404</h2><p>Página no encontrada</p></div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}