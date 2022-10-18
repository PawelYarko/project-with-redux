import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user', 
    initialState: {
        email:"",
        password:"",
        isLoggedIn: false,
    },
    reducers:{
        logIn(state, action){
           state.email = action.payload;
           state.password = action.payload;
           state.isLoggedIn = true;
        },
        logOut(state, action){
            state.login = "";
            state.password = "";
            state.isLoggedIn = false;
        }
    }
});

export default userSlice;

export const {logIn, logOut} = userSlice.actions;