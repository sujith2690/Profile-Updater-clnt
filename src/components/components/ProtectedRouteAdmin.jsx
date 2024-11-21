import React from 'react'
import { toast } from 'react-toastify';

const ProtectedRouteUser = ({ element }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== "admin") {
        toast.error('Please login');
        return <Navigate to="/admin/login" />;
    }
    return element;
}

export default ProtectedRouteUser