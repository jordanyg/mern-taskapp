import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Router , Routes , Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
   <>
    <Header />
    <Routes>
       
     <Route path='/' element ={<HomePage />}></Route>
     <Route path = '/login' element ={<LoginPage />}></Route>
     <Route path='/register' element ={<RegisterPage />}></Route>
    </Routes>
    </>
  )
}

export default App
