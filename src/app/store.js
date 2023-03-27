import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentsSlice";
import studentsReducer from "../features/students/studentsSlice";
import rateReducer from "../features/rate/rateSlice"
import studentsRateReducer from "../features/studentsRate/studentsRateSlice";
import votedStatusReducer from "../features/votedStatus/votedStatusSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import teachersReducer from "../features/teachers/teachersSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        students: studentsReducer,
        rate: rateReducer,
        studentsRate: studentsRateReducer,
        votedStatus: votedStatusReducer,
        teacher: teacherReducer,
        teachers: teachersReducer,
        user: userReducer,
    }
})