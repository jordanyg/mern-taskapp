import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen  from-blue-950 via-blue-900 to-slate-950 flex items-center justify-center px-6">
      
      <div className="max-w-3xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-blue-400">
            TaskApp
          </span>
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10">
          Organize your workflow, track your progress, and stay focused on
          what matters most. TaskApp helps you create, manage, and complete
          tasks with a clean and simple experience built for productivity 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg transition duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3 rounded-xl border border-blue-400 text-blue-100 hover:bg-blue-800 transition duration-300"
          >
            Create Account
          </Link>

        </div>

      </div>
    </div>
  )
}

export default HomePage
