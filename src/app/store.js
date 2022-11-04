import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentsSlice";
import studentsReducer from "../features/students/studentsSlice";
import rateReducer from "../features/rate/rateSlice"
import studentsRateReducer from "../features/studentsRate/studentsRateSlice";
import votedStatusReducer from "../features/votedStatus/votedStatusSlice";

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        students: studentsReducer,
        rate: rateReducer,
        studentsRate: studentsRateReducer,
        votedStatus: votedStatusReducer,
    }
})