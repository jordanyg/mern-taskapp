import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useSelector  , useDispatch} from 'react-redux'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice'



const Header = () => {

  const {userInfo} = useSelector((state)=>state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutApi] = useLogoutMutation() //backend logout to destroy cookies

  const logoutHandler = async()=>{
    try {
      await logoutApi().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(err)
    }
  }

  return (
     <header className="bg-blue-950 border-b border-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Task<span className="text-blue-400">App</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {userInfo ? (
            <div className="relative group">

              {/* User Button */}
              <button
                className="px-4 py-2 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition duration-300"
              >
                {userInfo.name}
              </button>

              {/* Dropdown */}
              <div
                className="absolute right-0 mt-2 w-44 bg-blue-950 border border-blue-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-3 text-blue-100 hover:bg-blue-900 rounded-t-xl"
                >
                  Profile
                </Link>

                <button
                  onClick={logoutHandler}
                  className="w-full text-left px-4 py-3 text-red-300 hover:bg-blue-900 rounded-b-xl"
                >
                  Logout
                </button>
              </div>

            </div>
          ) : (
            <>
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
            </>
          )}

        </div>
      </div>
    </header>
  )
}

export default Header
