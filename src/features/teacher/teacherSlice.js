import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 1,
    averageRate: 0,
    email: "teacher1@mail.com",
    fullname: "Нейлюк Ольга Петрівна",
    rates: [4],
    rewards: [],
    subjects: ['Менеджмент'],
}

export const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        changeTeacherInfo: (state, action) => {
            const {id, email, fullname, averageRate, rewards, subjects, rates} = action.payload
            state.id = id
            state.email = email
            state.fullname = fullname
            state.averageRate = averageRate
            state.rewards = rewards
            state.subjects = subjects
            state.rates = rates
        }
    }
})

export const selectAllStudentRates = state => {
    const rateMap = new Map()

    for(let rate of state.teacher.rates) {
        rateMap.set(rate, rateMap.has(rate) ? rateMap.get(rate) + 1 : 1)
    }

    const formatedRates = Array.from(rateMap.entries(), ([key, value]) => ({ rate: key, voted: value }));
    return formatedRates
}

export const selectTeacher = state => state.teacher
export const selectTeacherId = state => state.teacher.id
export const selectAverageRate = state => state.teacher.averageRate
export const selectTotalVoted = state => state.teacher.rates.length

export const { changeTeacherInfo } = teacherSlice.actions
export default teacherSlice.reducer