import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC  = () => {
  return (
    <>
         <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          FitFat
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 p-2 rounded-lg focus:ring focus:ring-yellow-400"
          />
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/categories" className="hover:underline">
            Categories
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/register" className="hover:underline">
            Register
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/cart" className="hover:underline">
            Add to Cart
          </Link>
        </div>
      </div>
    </nav>

    </>
  );
}

export default Header