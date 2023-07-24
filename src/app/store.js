import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentsSlice";
import rateReducer from "../features/rate/rateSlice"
import votedStatusReducer from "../features/votedStatus/votedStatusSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import teachersReducer from "../features/teachers/teachersSlice";
import userReducer from "../features/user/userSlice";
import formRateReducer from "../features/rate/formRateSlice";
import authenticationReducer from "../features/user/authenticationSlice"; 

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        rate: rateReducer,
        formRate: formRateReducer,
        votedStatus: votedStatusReducer,
        teacher: teacherReducer,
        teachers: teachersReducer,
        user: userReducer,
        authentication: authenticationReducer,
    }
})