// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">About ListIt</h3>
            <p>
              ListIt is your go-to marketplace for buying and selling items conveniently.
              Explore a wide variety of products tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/cart" className="hover:underline">Cart</Link></li>
              <li><Link to="/profile" className="hover:underline">Profile</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: support@listit.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p className="mt-2">
              Follow us on:
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
              <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} ListIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
