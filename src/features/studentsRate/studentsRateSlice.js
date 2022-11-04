import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        rate: 3,
        voted: 4
    },
    {
        rate: 5,
        voted: 2
    },
    {
        rate: 4,
        voted: 1
    }
]

export const studentsRateSlice = createSlice({
    name: "studentsRate",
    initialState,
    reducers: {
        addVote: (state, action) => {
            const newRate = action.payload
            let rateExists = false
            state.map(el => {
                if(el.rate === newRate) {
                    el.voted++
                    rateExists = true
                    return
                }
            })
            if(!rateExists) state.push({rate: newRate, voted: 1})
        }
    }
})

export const selectAverageStudentsRate = state => {
    const expressionData = {
        totalRate: 0,
        votedCount: 0
    }

    state.studentsRate.map(el => {
        expressionData.totalRate += el.rate * el.voted
        expressionData.votedCount += el.voted
    })

    if(!expressionData.votedCount || !expressionData.totalRate) {
        return 0
    } else {
        return expressionData.totalRate / expressionData.votedCount
    }
}

export const selectAllStudentsRates = state => state.studentsRate
export const selectTotalVoted = (state) => state.studentsRate.map(el => el.voted).reduce((prev, next) => prev + next)

export const { addVote } = studentsRateSlice.actions
export default studentsRateSlice.reducer