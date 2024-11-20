import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import AdminLogin from './components/pages/AdminLogin'
import AdminSign from './components/pages/AdminSign'
import AdminHome from './components/pages/AdminHome'
import ErrorPage from './components/pages/ErrorPage'

const App = () => {
  return (
    <div className='vh-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/signUp' element={<AdminSign />} />
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App