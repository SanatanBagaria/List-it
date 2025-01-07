// src/pages/ProductListing.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRecommendedProducts } from '../services/mockApi'
import ProductCard from '../components/ProductCard'

function ProductListing() {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0,
    maxPrice: 1000,
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6) // Products per page
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const allProducts = await getRecommendedProducts()
        setProducts(allProducts)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === 'All' || product.category === filters.category) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '')
    )
  })

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleCategoryChange = (e) => setFilters({ ...filters, category: e.target.value })
  const handlePriceRangeChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value })
  const handleSearchChange = (e) => setSearchQuery(e.target.value)

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Community Marketplace</h2>
      
      {/* Search and Filter */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 px-4 py-2 rounded w-full max-w-xs"
          />
          <button onClick={() => setSearchQuery('')} className="bg-blue-500 text-white px-4 py-2 rounded">Clear</button>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="border border-gray-300 px-4 py-2 rounded"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
          <div className="flex items-center space-x-4">
            <label>Price Range:</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handlePriceRangeChange}
              className="border border-gray-300 px-4 py-2 rounded"
            />
            <span>-</span>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handlePriceRangeChange}
              className="border border-gray-300 px-4 py-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : currentProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * productsPerPage >= filteredProducts.length}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProductListing
