import { configureStore } from  '@reduxjs/toolkit';
import { userSlice } from 'redux/auth/authSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});