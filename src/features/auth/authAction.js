import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL="http://localhost:3000";

export const userSignup=createAsyncThunk("auth/signup",async ({username,email,password},{rejectWithValue})=>{  //rejectWithValue is just to handle error properly
    try{
        const config={
            headers:{"Content-Type":"application/json"}
        };
        const {data}=await axios.post(
            `${backendURL}/auth/signup`,
            {username,email,password},
            config
        )
        return data
    }catch(error){
        return rejectWithValue(error?.response?.data?.message||error.message)
    }
})

export const userLogin=createAsyncThunk("auth/login",async ({email,password},{rejectWithValue})=>{
    try{
        const config={
            headers:{"Content-Type":"application/json"}
        };
        const {data}=await axios.post(
            `${backendURL}/auth/login`,
            {email,password},
            config
        )
        return data    //needs to be returned and passed to the extraReducers in the authSlice. This allows us to update the state with the login data
    }catch(error){
        return rejectWithValue(error?.response?.data?.message||error.message)
    }
})

// export const userLogout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
//     try {
//         // Remove token from localStorage
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");  // If role is stored
//         localStorage.removeItem("tokenExpiration"); // If token expiration is stored

//         // Dispatch the logout action to update the Redux store
//         dispatch(logout());  // Ensure this reducer exists in your authSlice
//         return {success:true}
//     } catch (error) {
//         console.error("Logout failed:", error.message);
//     }
// });

export const userLogout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
    try {
        localStorage.clear()
        // localStorage.removeItem("token");
        // localStorage.removeItem("role");
        // localStorage.removeItem("tokenExpiration");

        dispatch(logout());  

        return { success: true };  // Return a success message
    } catch (error) {
        return { success: false, error: error.message };
    }
});

