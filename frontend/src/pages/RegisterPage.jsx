import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const RegisterPage = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register] = useRegisterMutation()

    const {userInfo} = useSelector((state) => state.auth)

    useEffect(()=>{
      if(userInfo){
        navigate('/')
      }
    },[userInfo , navigate])

    const submitHandler =async (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
          toast.error('passwords do not match')
        }else{
          try {
            const res = await register({name , email , password}).unwrap()
            dispatch(setCredentials(res))
            console.log(res)
          } catch (err) {
            console.log(err?.data?.message || err.error)
          }
      }
    }

  return (
    <div className="min-h-screen from-blue-950 via-blue-900 to-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-blue-950/40 backdrop-blur-md border border-blue-900 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account 
        </h1>

        <p className="text-blue-200 text-center mb-8">
          Join TaskApp and start organizing your tasks.
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-blue-100 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-100 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/*confirm Password */}
          <div>
            <label className="block text-blue-100 mb-2">
             confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition duration-300 shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-blue-200 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  )
}

export default RegisterPage
