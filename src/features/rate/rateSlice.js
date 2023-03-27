import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rate: {
        rate: 0,
        description: '',
        studentId: null
    }
    
}

export const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        setRate: (state, action) => {
            state.rate = action.payload
        },
        setDescription: (state, action) => {
            state.rate.description = action.payload
        }
    }
})

export const selectRate = state => state.rate.rate.rate
export const selectDescription = state => state.rate.rate.description

export const { setRate, setDescription } = rateSlice.actions
export default rateSlice.reducer