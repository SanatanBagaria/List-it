// src/pages/ListProductPage.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listProduct } from '../services/mockApi' // API to handle product creation

function ListProductPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Simulating product listing via mockApi
      await listProduct(formData)
      setSuccess(true)
      setTimeout(() => navigate('/products'), 2000) // Redirect after success
    } catch (err) {
      setError(err.message || 'Failed to list product. Please try again.')
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-6">List Your Product</h2>
      {success && <p className="text-green-500 mb-4">Product listed successfully! Redirecting...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Upload Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full border px-4 py-2 rounded focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          List Product
        </button>
      </form>
    </div>
  )
}

export default ListProductPage
