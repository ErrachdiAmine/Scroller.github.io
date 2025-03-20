import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <><div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gradient-to-r pt-16 from-blue-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg m-4 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Genova!</h1>
        <p className="text-lg text-gray-600 mb-6">This is your place to discover and explore new content.</p>
        <Link
          to="/Posts"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Start here!
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home
