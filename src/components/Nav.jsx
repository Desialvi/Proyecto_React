import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ isLoggedIn, toggleLogin }){
  return (
    <nav className='navbar'>
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/admin">Admin</Link>
      <button className='login-btn' onClick={toggleLogin}>
        {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
    </nav>
  )
}