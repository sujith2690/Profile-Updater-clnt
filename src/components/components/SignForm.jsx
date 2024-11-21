import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpSchema } from '../../schemas/validationSchema';
import { adminSignUpApi, signUpApi } from '../../API/authApis';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const SignForm = ({ location }) => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false)
    const initialValues = formValues
    const validationSchema = signUpSchema
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, action) => {
            setLoading(true)
            try {
                const { data } =
                    location === 'admin' ?
                        await adminSignUpApi(values) : await signUpApi(values)
                toast.success(data.message)
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.userDetails));
                    navigate('/')
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
        <div className="p-4 bg-white shadow rounded" style={{ width: '500px' }}>
            <h2 className="text-center mb-4">{location !== 'admin' ? 'Sign Up' : 'Admin SignUp'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex gap-2">
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required
                            id='userName'
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.userName && touched.userName ? (
                            <p className="text-danger">{errors.userName}</p>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            id='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                            <p className="text-danger">{errors.email}</p>
                        ) : null}
                    </div>
                </div>
                <div className="mb-3 d-flex gap-2">
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            id='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                            <p className="text-danger">{errors.password}</p>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            required
                            id='confirmPassword'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <p className="text-danger">{errors.confirmPassword}</p>
                        ) : null}
                    </div>
                </div>
                <button type={loading ? 'button' : 'submit'} className="btn btn-primary w-100">
                    {
                        loading ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div> : 'SignUp'
                    }
                </button>
            </form>
            <p className="text-center mt-3">
                Already have an account
                <Link to={location === 'admin' ?'/admin/login':'/login'}> <span>click here</span></Link>
            </p>
        </div>
    )
}

export default SignForm