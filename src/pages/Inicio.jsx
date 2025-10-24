import React from 'react'
import ProductList from '../components/ProductList'

export default function Inicio({ addToCart }){
  return (
    <main>
      <h2 style={{textAlign:'center', padding:16}}>Inicio - Productos</h2>
      <ProductList addToCart={addToCart} />
    </main>
  )
}