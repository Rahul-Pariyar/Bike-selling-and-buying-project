import React from 'react';
import { useForm } from 'react-hook-form';
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  const onSubmit = async (data) => {
    try{
      const response=await axios.post(
        'http://localhost:3000/auth/signup',
        data,
      {
        withCredentials:true
      })
      toast.success(response.data.message);
      setTimeout(() => navigate('/login'), 1500);
    }catch(err){
      console.log(err)
      toast.error(err.response?.data?.message||"Something went wrong");
    }
    
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Sign up to MotoBike Market
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {/* Username Field */}
          <div>
            <label className="block text-gray-600 font-medium">Username</label>
            <input
              className={`${errors.username?"border-2 focus:ring-2 focus:ring-red-400 outline-none":""} w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
              placeholder="Username"
              type="text"
              {...register('username', {
                required: { value: true, message: 'Username cannot be blank' },
                minLength:{value:5,message:"Username must be atleast 5 character long"}
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              className={`${errors.email?"border-2 focus:ring-2 focus:ring-red-400 outline-none":""} w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
              placeholder="Email"
              type="email"
              {...register('email', {
                required: { value: true, message: 'Email cannot be blank' },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email format',
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              className={`${errors.password?"border-2 focus:ring-2 focus:ring-red-400 outline-none":""} w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
              placeholder="Password"
              type="password"
              {...register('password', {
                required: { value: true, message: 'Password cannot be blank' },
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                pattern: { 
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: 'Password must contain at least one number and one special character',
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
          <p>Already have an account? <NavLink to="/login" className="text-blue-500">Sign in</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
