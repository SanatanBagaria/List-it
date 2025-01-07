// src/components/ProductCard.jsx
import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {

  const { addToCart, removeFromCart, isInCart } = useCart()

  const handleCartClick = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id)
    } else {
      addToCart(product)
    }
  }


  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <p className="mt-2 text-lg">Rs.{product.price}</p>
        <div className="flex space-x-2">
        <Link to={`/products/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex-grow text-center">View Details</Link>
        <button
        className={` text-white px-4 py-2 rounded-lg ${
          isInCart(product.id) ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'
        }`}
        onClick={handleCartClick}
        >
        {isInCart(product.id) ? 'Item Added' : 'Add to Cart'}
        </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
