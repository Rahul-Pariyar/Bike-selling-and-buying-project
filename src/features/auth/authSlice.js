import { createSlice } from "@reduxjs/toolkit";
import { userLogin,userSignup } from "./authAction";

const initialState={
    loading:false,
    token:null,
    isLogged:false,    //updates based on login state
    role:null,
    error:null,
    success:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{     //synchronous actions to be performed 
        logout:(state)=>{
            state.loading=false;
            state.token=null;
            state.role=null;
            state.isLogged=false;
            state.error=null;
            state.success=false;
        },
        setCredentials:(state,{payload})=>{
            state.token=payload.token;
            state.role=payload.role;
            state.isLogged=payload.isLogged;
            state.success=true;
        },
    },
    extraReducers:(builder)=>{   //extraReducers is used to handle async actions created using createAsyncThunk
        builder
        //for login 
        .addCase(userLogin.pending,(state)=>{     // maintain state as per api stage
            state.loading=true;
            state.error=null;
        })
        .addCase(userLogin.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.token=payload.token;
            state.role=payload.role;
            state.isLogged=true;
            state.success=true
        })
        .addCase(userLogin.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })

        //for user signup
        .addCase(userSignup.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(userSignup.fulfilled,(state,{payload})=>{
            state.loading=false;
        })
        .addCase(userSignup.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
})

export const {logout,setCredentials}=authSlice.actions
export default authSlice.reducer