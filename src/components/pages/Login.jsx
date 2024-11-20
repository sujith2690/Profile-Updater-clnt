import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <LoginForm location='user'/>
        </div >
    )
}

export default Login