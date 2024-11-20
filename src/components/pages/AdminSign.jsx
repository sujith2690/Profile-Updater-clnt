import React from 'react'
import SignForm from '../components/SignForm'

const AdminSign = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <SignForm location='admin' />
        </div >
    )
}

export default AdminSign