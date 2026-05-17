import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../slices/authSlice'
import { useLoginMutation } from '../slices/usersApiSlice'
import { toast } from 'react-toastify'

const LoginPage = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login] = useLoginMutation()

    const {userInfo} = useSelector((state) => state.auth)

    useEffect(()=>{
      if(userInfo){
        navigate('/')
      }
    },[userInfo , navigate])

    const submitHandler = async(e)=>{
        e.preventDefault()
        try {
          const res = await login({email , password}).unwrap()
          
          dispatch(setCredentials(res))
          navigate('/')
        } catch (err) {
          toast.error(err?.data?.message || err.error)
        }
    }

  return (
    <div className="min-h-screen  from-blue-950 via-blue-900 to-slate-950 flex items-center justify-center px-6">
      
      <div className="w-full max-w-md bg-blue-950/40 backdrop-blur-md border border-blue-900 rounded-2xl shadow-2xl p-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-blue-200 text-center mb-8">
          Sign in to continue managing your tasks.
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          
          {/* Email */}
          <div>
            <label   className="block text-blue-100 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email} 
              onChange={ (e)=>setEmail(e.target.value) }
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-blue-100 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password} 
              onChange={ (e)=>setPassword(e.target.value) }
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition duration-300 shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-blue-200 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default LoginPage
