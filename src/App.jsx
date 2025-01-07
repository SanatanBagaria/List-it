import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Communities from './pages/Communities'
import CommunityDetail from './pages/CommunityDetail'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateCommunity from './pages/CreateCommunity'
import Footer from './components/Footer'
import ProductListing from './pages/ProductListing'
import { CartProvider } from './contexts/CartContext'
import CartPage from './pages/CartPage'
import ListProductPage from './pages/ListProductPage';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container bg-gray-200 mx-auto px-4 py-8">
        <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/communities/create" element={<CreateCommunity />} />
          <Route path="/communities/:id" element={<CommunityDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/list-product" element={<ListProductPage />} />
        </Routes>
        </CartProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App