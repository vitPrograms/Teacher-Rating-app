import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectOption: "rated",
    sortOption: "studentsCount",
    teachers: [
        {
            id: 1,
            averageRate: 4.00,
            email: "teacher1@mail.com",
            fullname: "Нейлюк Ольга Петрівна",
            rates: [4],
            rewards: [],
            subjects: ['Менеджмент'],
        },
        {
            id: 2,
            averageRate: 4.00,
            email: "teacher2@mail.com",
            fullname: "Романович Вероніка Петрівна",
            rates: [4],
            rewards: [],
            subjects: ['Алгоритми програмування'],
        },
        {
            id: 3,
            averageRate: 4.50,
            email: "teacher3@mail.com",
            fullname: "Романович Вероніка Петрівна",
            rates: [4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5],
            rewards: [],
            subjects: ['Алгоритми програмування'],
        },
        {
            id: 4,
            averageRate: 4.50,
            email: "teacher3@mail.com",
            fullname: "Романович Вероніка Петрівна",
            rates: [4,5],
            rewards: [],
            subjects: ['Алгоритми програмування'],
        }
    ]
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        changeTeachers: (state, action) => {
            state.teachers = action.payload
        },
        changeSelectOptionForTeacher: (state, action) => {
            state.selectOption = action.payload
        },
        changeSortOptionForTeacher: (state, action) => {
            state.sortOption = action.payload
        },
    }
})

export const selectAllTeachers = state => state.teachers.teachers
export const selectSelectOption = state => state.teachers.selectOption
export const selectSortOption = state => state.teachers.sortOption

export const { changeTeachers, changeSelectOptionForTeacher, changeSortOptionForTeacher } = teachersSlice.actions
export default teachersSlice.reducer