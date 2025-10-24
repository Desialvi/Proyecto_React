import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, addToCart }){
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div style={{display:'flex', gap:8, justifyContent:'center', marginTop:8}}>
        <button onClick={() => addToCart(product)}>Agregar</button>
        <Link to={`/producto/${product.id}`}><button>Ver</button></Link>
      </div>
    </div>
  )
}