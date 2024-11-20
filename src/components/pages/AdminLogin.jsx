import React from 'react'
import LoginForm from '../components/LoginForm'

const AdminLogin = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <LoginForm location='admin' />
        </div >
    )
}

export default AdminLogin