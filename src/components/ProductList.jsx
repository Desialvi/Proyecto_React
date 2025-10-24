import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ addToCart }){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Error al obtener productos')
        const data = await res.json()
        if (mounted) setProducts(data)
      } catch (err) {
        if (mounted) setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchProducts()
    return () => { mounted = false }
  }, [])

  if (loading) return <p style={{padding:20}}>Cargando productos...</p>
  if (error) return <p style={{color:'red', padding:20}}>Error: {error}</p>

  return (
    <div className="product-list">
      {products.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} />)}
    </div>
  )
}
