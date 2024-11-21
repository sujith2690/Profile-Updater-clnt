import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role) {
            setRole(user.role);
        } else {
            setRole('');
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <div className='p-3 border border-secondary'>
            <nav className="navbar navbar-light bg-light d-flex align-items-center justify-content-between">
                <h3 className=''>{role === "admin" ? 'Admin' : ''}</h3>
                <a className="navbar-brand">User Profile</a>
                <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default Navbar