import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useUpdateUserProfileMutation , useDeleteUserProfileMutation } from '../slices/usersApiSlice'
import { toast } from 'react-toastify'
import { setCredentials } from '../slices/authSlice'
import { logout } from '../slices/authSlice'



const ProfilePage = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [updateProfile ] = useUpdateUserProfileMutation()
    const [deleteProfile  ] = useDeleteUserProfileMutation()
    

    const {userInfo} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(userInfo){
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    }, [userInfo])

    const submitHandler = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('passwords do not match')
        }else{
            try {
                const res = await updateProfile({id: userInfo._id, name , email , password}).unwrap()
                dispatch(setCredentials(res))
                navigate('/')
                toast.success('profile updated')
            } catch (err) {
                console.log(err?.data?.message || err.error)
            }
        }
    }

    const deleteHandler = async ()=>{

        const confirmDelete = window.confirm('Are you sure you want to delete your data')

        if(!confirmDelete)return
        
        try {
              await deleteProfile({id: userInfo._id,}).unwrap()
              dispatch(logout())
              navigate('/register')
            } catch (error) {
              console.log(error)
            }
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-6  from-blue-950 via-blue-900 to-slate-950">

      <div className="w-full max-w-lg bg-blue-950/40 backdrop-blur-md border border-blue-900 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Your Profile ⚡
        </h1>

        <p className="text-blue-200 text-center mb-8">
          Update your account settings and manage your profile.
        </p>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          {/* Name */}
          <div>
            <label className="block text-blue-100 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-blue-100 mb-2">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-blue-100 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-xl bg-blue-900/40 border border-blue-800 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition duration-300 shadow-lg"
          >
            Update Profile
          </button>

        </form>

        {/* Danger Zone */}
        <div className="mt-10 border-t border-blue-900 pt-6">

          <h2 className="text-xl font-semibold text-red-300 mb-3">
            Danger Zone
          </h2>

          <p className="text-blue-200 mb-5">
            Permanently delete your account and all associated data.
          </p>

          <button
            onClick={deleteHandler}
            className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition duration-300 shadow-lg"
          >
            Delete Account
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProfilePage
