import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teacher: {
        id: 1,
        averageRate: 0,
        email: "teacher1@mail.com",
        fullname: "Нейлюк Ольга Петрівна",
        rates: [4],
        rewards: [],
        subjects: ['Менеджмент'],
    }
}

export const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        changeTeacherInfo: (state, action) => {
            state.teacher = action.payload
        }
    }
})

export const selectTeacher = state => state.teacher

export const { changeTeacherInfo } = teacherSlice.actions
export default teacherSlice.reducer