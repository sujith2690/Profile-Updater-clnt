import React from 'react'
import { Link } from 'react-router-dom'
import SignForm from '../components/SignForm'

const SignUp = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <SignForm location='user' />
        </div >
    )
}

export default SignUp