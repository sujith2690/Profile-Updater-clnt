import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRouteUser = ({ element }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.role !== "user") {
        toast.error('Please login');
        return <Navigate to="/login" />;
    }
    return element
}

export default ProtectedRouteUser