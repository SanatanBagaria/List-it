// src/pages/CartPage.jsx
import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

function CartPage() {
  const { cartItems, removeFromCart, getTotalPrice, clearCart } = useCart()

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding items!</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border p-4 rounded shadow-md">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="mt-2 text-lg">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <div>
              <h3 className="text-lg font-bold">Total: ${getTotalPrice()}</h3>
              <Link to="/checkout" className="mt-4 block text-center bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
