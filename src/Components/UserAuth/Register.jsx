'use client'

import React, { useEffect } from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

const Register = ({ onClose }) => {
  
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg space-y-6 relative max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                >
                    &times;
                </button>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

                {/* Form */}
                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Full Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Remember me
                        </label>
                        <a href="#" className="text-green-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Register Button */}
                    <button className="btn bg-green-500 w-full">Register</button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-gray-400 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex flex-row gap-3">
                    <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
                        <FaFacebookF className="text-blue-600" /> Facebook
                    </button>
                </div>

                {/* Already have account */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={onClose}
                        className="text-orange-500 font-medium hover:underline"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Register
