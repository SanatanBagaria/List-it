import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className=" shadow-sm bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            List-It
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/communities" className="hover:text-blue-500">
              Communities
            </Link>
            <Link to="/products" className="hover:text-blue-500">
                Marketplace
            </Link>
            <Link to="/cart" className="hover:text-blue-500">
                Cart
            </Link>
            <Link to="/list-product" className="hover:text-blue-500">
                List Product
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="hover:text-blue-500">
                  Profile
                </Link>
                
                <button
                  onClick={logout}
                  className="hover:text-blue-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-500">
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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