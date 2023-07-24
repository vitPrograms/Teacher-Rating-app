import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    tag: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: {
            reducer: (state, action) => {
                return {...state, ...action.payload}
            }
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