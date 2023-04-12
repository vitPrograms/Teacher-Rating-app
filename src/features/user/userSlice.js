import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 2,
    tag: 2,
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
export const selectUserTag = state => state.user.tag

export const { setUser, addRatedTeacher } = userSlice.actions
export default userSlice.reducer