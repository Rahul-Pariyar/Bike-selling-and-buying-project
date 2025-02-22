import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate()

  const onSubmit = async (data) => {
    try{
      const response=await axios.post('http://localhost:3000/auth/login',data,
        {
          withCredentials:true
        })
        const token=response.data.jwtToken

        if (token) {
          localStorage.setItem("authToken", token);
          toast.success(response.data.message);
          navigate("/"); // Redirect user after login
        }
    }catch(err){
        toast.error(err.response?.data?.message)
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl text-blue-500 font-semibold text-center mb-4">Sign In</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                className={`${errors.email?"border-2 focus:ring-2 focus:ring-red-400 outline-none":""} w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none`}
                placeholder="Email"
                type="text"
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
                // minLength: { value: 6, message: 'Password must be at least 6 characters' },
                // pattern: { 
                //   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                //   message: 'Password must contain at least one number and one special character',
                // },
              })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          >
            Sign in
          </button>
          <p>
            New to MotoBike Market?
              <NavLink to="/signup" className="text-blue-500">Creat an account</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { NavLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   // Show error messages as toast notifications
//   const showErrors = () => {
//     if (errors.email) {
//       toast.error(errors.email.message);
//     }
//     if (errors.password) {
//       toast.error(errors.password.message);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl text-blue-500 font-semibold text-center mb-4">Sign In</h2>

//         <form
//           className="flex flex-col space-y-4"
//           onSubmit={handleSubmit(onSubmit, showErrors)}
//         >

//           <div>
//             <label className="block text-gray-600 font-medium">Email</label>
//             <input
//               className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//               placeholder="Email"
//               type="text"
//               {...register('email', {
//                 required: { value: true, message: 'Email cannot be blank' },
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: 'Invalid email format',
//                 },
//               })}
//             />
//             {/* <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p> */}
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block text-gray-600 font-medium">Password</label>
//             <input
//               className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//               placeholder="Password"
//               type="password"
//               {...register('password', {
//                 required: { value: true, message: 'Password cannot be blank' },
//                 minLength: { value: 3, message: 'Password must be at least 3 characters' },
//                 pattern: { 
//                   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
//                   message: 'Password must contain at least one number and one special character',
//                 },
//               })}
//             />
//             {/* <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p> */}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//           >
//             Sign in
//           </button>
//           <p>
//             New to MotoBike Market?{" "}
//             <NavLink to="/signup" className="text-blue-500">
//               Create an account
//             </NavLink>
//           </p>
//         </form>
//       </div>

//       {/* Toastify Container */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Login;
