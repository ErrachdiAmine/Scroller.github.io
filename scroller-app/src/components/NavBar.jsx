import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="youtube.png"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">Scroller</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/Feeds"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Feeds
          </Link>
          <Link
            to="/Reels"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Reels
          </Link>
          <Link 
            to="/apitesting"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            API Testing
          </Link>
        </div>

        {/* Login Button */}
        <div className="md:flex items-center">
          <Link
            to="/Login"
            className="text-gray-700 font-semibold hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu (for smaller screens) */}
      <div className="md:hidden mt-4 border-t pt-4 flex justify-center gap-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/feeds"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Feeds
        </Link>
        <Link
          to="/reels"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Reels
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
