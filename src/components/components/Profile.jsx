import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import defaultProfileImage from '../../../src/assets/userProfile.png';
import { updateProfile } from '../../API/profileApis';

const Profile = () => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
    });
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const userProfile = () => {
            const User = JSON.parse(localStorage.getItem('user'));
            if (User) {
                setUser((prev) => ({
                    ...prev,
                    userName: User.userName,
                    email: User.email,
                }));
            }
        };
        userProfile();
    }, []);

    const handleEdit = () => {
        setEdit(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setEdit(false);
        const { data } = await updateProfile(user)
        console.log(data, '--------------data')
        
    };
    return (
        <div className="d-flex justify-content-center align-items-center bg-light py-5">
            <div
                className="position-relative bg-white shadow rounded"
                style={{
                    width: '500px',
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                }}
            >
                <img
                    src={defaultProfileImage}
                    alt="Profile"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />
                <form
                    onSubmit={handleSubmit}
                    className="position-absolute bottom-0 w-100 h-50 d-flex flex-column justify-content-center align-items-center text-white"
                    style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                >
                    {edit ? (
                        <div className="d-flex flex-column gap-1">
                            <input
                                className="form-control"
                                type="text"
                                name="userName"
                                required
                                value={user.userName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                            {/* <input
                                className="form-control"
                                type="email"
                                name="email"
                                required
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            /> */}
                            <button type="submit" className="btn btn-primary p-2">
                                Save
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="mb-2">{user.userName}</h3>
                            <p className="mb-3">{user.email}</p>
                            <div
                                onClick={handleEdit}
                                className="bg-light text-dark p-2 rounded-circle d-flex justify-content-center align-items-center"
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                }}
                            >
                                <FaPen />
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Profile;
