import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Router , Routes , Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import ProfilePage from './pages/ProfilePage'
import PrivateRoutes from './components/PrivateRoutes'


const App = () => {
  return (
   <>
    <Header />
    <ToastContainer />
    <Routes>
       
     <Route path='/' element ={<HomePage />}></Route>
     <Route path = '/login' element ={<LoginPage />}></Route>
     <Route path='/register' element ={<RegisterPage />}></Route>
     <Route path='/profile' element={<PrivateRoutes > <ProfilePage /></PrivateRoutes>}></Route>
    </Routes>
    </>
  )
}

export default App
