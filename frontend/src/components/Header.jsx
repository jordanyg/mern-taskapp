import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
     <header className="bg-blue-950 shadow-lg border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / App Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Task<span className="text-blue-400">App</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-blue-100 hover:bg-blue-800 hover:text-white transition duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-300 shadow-md"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
