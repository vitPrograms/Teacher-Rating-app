import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        tag: '35356',
    },
    {
        id: 2,
        tag: '56464',
    },
    {
        id: 3,
        tag: '00415',
    }
]

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        
    }
})

export const selectAllStudents = (state) => state.students
export default studentsSlice.reducer