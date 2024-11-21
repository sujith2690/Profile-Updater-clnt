import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../../schemas/validationSchema';
import { adminLogInApi, logInApi } from '../../API/authApis';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const LoginForm = ({ location }) => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false)
    const initialValues = formValues
    const validationSchema = loginSchema
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, action) => {
            setLoading(true)
            try {
                const { data } =
                    location === 'admin' ?
                        await adminLogInApi(values) : await logInApi(values)
                toast.success(data.message)
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.userDetails));
                    navigate('/admin/home')
                }
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error, 'Login failed');
            }
            action.resetForm();
            console.log('before reset')
            setLoading(false)
        }
    })

    return (
        <div className="p-4 bg-white shadow rounded" style={{ width: '300px' }}>
            <h2 className="text-center mb-4">{location !== 'admin' ? 'Login' : 'Admin Login'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        id='email'
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                        <p className="text-danger text-center">{errors.email}</p>
                    ) : null}
                </div>
                <div className="mb-3">
                    <input
                        id='password'
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                        <p className="text-danger text-center">{errors.password}</p>
                    ) : null}
                </div>
                <button type={loading ? 'button' : 'submit'} className="btn btn-primary w-100">
                    {
                        loading ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div> : 'Login'
                    }
                </button>
            </form>
            <p className="text-center mt-3">
                Need a new Account
                <Link to={location === 'admin' ?'/admin/signUp':'/signUp'}> <span>click here</span></Link>
            </p>
        </div>
    )
}

export default LoginForm