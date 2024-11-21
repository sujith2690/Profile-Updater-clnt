import React from 'react'
import { Navigate } from 'react-router-dom';

const PreventLoginRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user.role === 'admin' ? <Navigate to="/admin/home" /> :user.role === 'user' ? <Navigate to="/login" /> :<Navigate to="/admin/login" /> ;
    }

    return element;
}

export default PreventLoginRoute