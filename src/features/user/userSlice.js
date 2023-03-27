import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 2,
    userTag: 53562,
    ratedTeachers: [
        {id: 4, rate: 4},
        {id: 1, rate: 5},
    ]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state = action.payload
        },
        addRatedTeacher: (state, action) => {
            state.ratedTeachers = [...state.ratedTeachers, action.payload]
        }
    }
})

export const selectUser = state => state.user
export const selectUserId = state => state.user.id
export const selectRatedTeachers = state => state.user.ratedTeachers

export const { setUser, addRatedTeacher } = userSlice.actions
export default userSlice.reducer