import Gradient from '@/components/Gradient'
import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center max-h-screen bg-[#efedee] bg-accent h-full'>
            <div className='bg-white flex h-[80vh] w-[75%] justify-center rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                <div className='left   h-[100%] w-[50%]  hidden md:flex justify-center items-center overflow-hidden object-cover rounded-l-md relateive'>
                    <p className='absolute z-10 text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary top-[40%]'>Welcome </p> <p className='absolute z-10 text-3xl md:text-5xl lg:text-7xl  font-extrabold text-primary top-[50%] '> Back!</p>
                    <Gradient />
                </div>
                <div className='right  h-[100%] md:w-[50%] w-full p-10 flex  items-center rounded-r-md'>
                    <form className='w-full'>
                        <h2 className='font-bold text-3xl'>Login</h2>
                        <p className='text-light-gray mt-2 text-lg'>Please login to your account</p>
                        <div className='my-10'>
                            <input type="text" placeholder='Username' className='px-3 mb-4 py-2 outline-none border border-gray rounded-md w-[100%]' />
                            <input type="text" placeholder='Password' className='px-3 py-2 outline-none border border-gray rounded-md w-[100%]' />
                        </div>
                        <div className='flex items-center'>
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                                        id="red"  />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            Remember Me
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login