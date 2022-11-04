import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const votedStatusSlice = createSlice({
    name:"votedStatus",
    initialState,
    reducers: {
        changeVotedStatus: (state, action) => {
            state.value = action.payload
        }
    }
})

export const selectVotedStatus = state => state.votedStatus.value

export const { changeVotedStatus } = votedStatusSlice.actions
export default votedStatusSlice.reducer
