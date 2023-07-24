import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        studentId: 1,
        rate: 4,
        timestamp: new Date().getTime(),
        description: ''
    },
    {
        id: 2,
        studentId: 2,
        rate: 5,
        timestamp: new Date().getTime(),
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vel et quo, asperiores quibusdam aliquam optio, accusantium corrupti provident odio officiis rem doloribus molestiae expedita dolore dignissimos voluptates at magni.' 
    }
]

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action) => {
            return [...action.payload]
        },
        addComment: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const selectAllComments = (state) => state.comments

export const { setComments, addComment } = commentsSlice.actions
export default commentsSlice.reducer