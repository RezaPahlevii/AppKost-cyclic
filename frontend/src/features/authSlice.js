import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    pemilik: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginPemilik = createAsyncThunk("pemilik/LoginPemilik", async(pemilik, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/login',{
            email: pemilik.email,
            password: pemilik.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
        
    }
})

export const getMe = createAsyncThunk("pemilik/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("pemilik/LogOut", async() => {
       await axios.delete('http://localhost:5000/logout');
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginPemilik.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginPemilik.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.pemilik = action.payload;
        });
        builder.addCase(LoginPemilik.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Get pemilik login
        builder.addCase(getMe.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.pemilik = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;