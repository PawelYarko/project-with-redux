import { configureStore } from  '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userSlice } from 'redux/auth/authSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});