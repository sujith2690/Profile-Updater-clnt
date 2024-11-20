import React from 'react'
import { Link } from 'react-router-dom'

const SignForm = ({ location }) => {
    console.log(location, '-----------location')
    return (
        <div className="p-4 bg-white shadow rounded" style={{ width: '500px' }}>
            <h2 className="text-center mb-4">{location !== 'admin' ? 'Sign Up' : 'Admin SignUp'}</h2>
            <form>
                <div className="mb-3 d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3 d-flex gap-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    SignUp
                </button>
            </form>
            <p className="text-center mt-3">
                Already have an account
                <Link to={'/login'}> <span>click here</span></Link>
            </p>
        </div>
    )
}

export default SignForm