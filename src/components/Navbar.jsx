import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu } from 'lucide-react'

function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="shadow-sm bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/list-it-logo.jpg" 
            alt="List-It Logo" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold">
            List-It
          </span>
        </Link>
          
          <button 
            className="md:hidden p-2 hover:bg-gray-400 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          <div className={`
            absolute top-16 left-0 right-0 bg-gray-300 md:relative md:top-0
            md:flex md:items-center md:space-x-6
            ${isOpen ? 'block' : 'hidden'}
          `}>
            <Link to="/communities" className="block px-4 py-2 hover:text-blue-500 md:p-0">
              Communities
            </Link>
            <Link to="/products" className="block px-4 py-2 hover:text-blue-500 md:p-0">
              Marketplace
            </Link>
            <Link to="/cart" className="block px-4 py-2 hover:text-blue-500 md:p-0">
              Cart
            </Link>
            <Link to="/list-product" className="block px-4 py-2 hover:text-blue-500 md:p-0">
              List Product
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="block px-4 py-2 hover:text-blue-500 md:p-0">
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:text-blue-500 md:p-0"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 hover:text-blue-500 md:p-0">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 md:px-4 md:py-2"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar