import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    rate: 0,
    content: '',
    student: 0,
    teacher: 0,
    date: 0
}

export const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        setRate: (state, action) => {
            const {id, rate, content, date, student, teacher} = action.payload
            return {...state, id, rate, content, date, student, teacher}
        }
    }
})

export const selectRateData = state => state.rate
export const selectRate = state => state.rate.rate
export const selectDescription = state => state.rate.description

export const { setRate} = rateSlice.actions
export default rateSlice.reducer