import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 py-3 px-6 post">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="genova-logo.png"
            alt="logo"
            className="w-8 h-8 object-cover"
          />
          <h1 className="text-xl font-bold text-gray-800">Genova</h1>
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
            to="/Posts"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Posts
          </Link>
        </div>

        {/* Login Button */}
        <div className="md:flex items-center">
          <Link
            to="/Login"
            className="text-gray-700 font-semibold hover:text-blue-500 transition duration-300"
          >
          <img 
            src="user.png"
            alt="profile"
            className="w-8 h-8 object-cover"   
          />
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
          to="/Posts"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
