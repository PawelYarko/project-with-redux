import { createSlice} from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'myValue', 
    initialState: 10,
    reducers:{
        increment(state, action){
            return state + action.payload
        },
        decrement(state, action){
            return state - action.payload
        }
    }
});

export default mySlice;

export const {increment, decrement} = mySlice.actions;