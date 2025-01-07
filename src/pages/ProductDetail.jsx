import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../services/mockApi'
import { useAuth } from '../contexts/AuthContext'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductDetails(id)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-500 mb-4">
            Rs.{product.price}
          </p>
          
          <div className="mb-6">
            <h2 className="font-bold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="font-bold mb-2">Community</h2>
            <p>{product.communityName}</p>
          </div>

          <div className="mb-6">
            <h2 className="font-bold mb-2">Seller</h2>
            <p>{product.sellerName}</p>
          </div>

          {user && user.id !== product.sellerId && (
            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Contact Seller
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail