'use client'

import React, { useState } from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import Register from './Register' // Make sure this import path is correct

const Login = () => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)

    return (
        <div className="w-full flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Remember me
                        </label>
                        <a href="#" className="text-green-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button className="btn bg-orange-500 w-full">Login</button>
                </form>

                <div className="flex items-center gap-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-gray-400 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <div className="flex flex-row gap-3">
                    <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
                        <FaFacebookF className="text-blue-600" /> Facebook
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <button
                        onClick={() => setIsRegisterOpen(true)}
                        className="text-green-600 font-medium hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </div>

            {isRegisterOpen && (
                <Register onClose={() => setIsRegisterOpen(false)} />
            )}
        </div>
    )
}

export default Login
