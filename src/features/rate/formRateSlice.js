import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rate: 0,
    description: '',
    teacherId: null,
}

export const formRateSlice = createSlice({
    name: 'formRate',
    initialState,
    reducers: {
        setFormRate: (state, action) => {
            state.rate = action.payload
        },
        setFormDescription: (state, action) => {
            state.description = action.payload
        },
        setFormTeacherId: (state, action) => {
            state.teacherId = action.payload
        }
    }
})

export const selectFormRateData = state => state.formRate
export const selectFormRate = state => state.formRate.rate
export const selectFormDescription = state => state.formRate.description
export const selectFormTeacherId = state => state.formRate.teacherId

export const { setFormRate, setFormDescription, setFormTeacherId } = formRateSlice.actions
export default formRateSlice.reducer