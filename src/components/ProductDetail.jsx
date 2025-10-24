import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const f = async () => {
      try{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!res.ok) throw new Error('Producto no encontrado')
        const data = await res.json()
        if(mounted) setProduct(data)
      }catch(err){
        if(mounted) setError(err.message)
      }finally{
        if(mounted) setLoading(false)
      }
    }
    f()
    return () => { mounted = false }
  }, [id])

  if (loading) return <p style={{padding:20}}>Cargando...</p>
  if (error) return <p style={{color:'red', padding:20}}>Error: {error}</p>
  if (!product) return <p style={{padding:20}}>No encontrado</p>

  return (
    <div className='product-detail'>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  )
}