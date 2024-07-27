import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <div className='min-h-screen min-w-full bg-slate-500 flex items-center justify-center'>
            <div className='w-96 border-2 border-orange-400 p-8'>
                <form action="">
                    <div className='bg-slate-500 flex justify-center mb-2'>
                        <FaUserCircle className='h-28 w-28 bg-blue-500 rounded-full' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='block text-white mb-2'>Email</label>
                        <input type="email" id="email" className='w-full p-2 border border-gray-300 rounded-full' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='block text-white mb-2'>Password</label>
                        <input type="password" id="password" className='w-full p-2 border border-gray-300 rounded-full' />
                    </div>
                    <div className='mb-3 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <input type="checkbox" className="checkbox-custom" />
                            <label className='ml-2 text-white'>Check me</label>
                        </div>
                        <a href="" className='underline text-white'>Forgot Password</a>
                    </div>
                    <div className='mb-3'>
                        <button className='w-full mt-2 p-2 border border-gray-300 rounded-full'>Sign Up</button>
                    </div>
                    <div className='flex justify-center items-center mb-3'>
                        <div className='h-[0.5px] w-32 bg-black mr-2'></div>
                        <span className='text-white'>or</span>
                        <div className='h-[0.5px] w-32 bg-black ml-2'></div>
                    </div>
                    <div className='mb-3'>
                        <button className='w-full mt-2 p-2 border border-gray-300 rounded-full flex items-center justify-center'>
                            <FcGoogle className='h-6 w-6 mr-2' />
                            Sign In using Google
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='text-white'>Don't have an account? </span>
                        <a href="" className='underline text-white ml-1'>Sign In</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
