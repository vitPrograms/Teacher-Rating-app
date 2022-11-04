import { createSlice, nanoid } from "@reduxjs/toolkit";

const d = new Date()
d.setHours(-50)

const initialState = [
    {
        id: 1,
        studentId: 1,
        rate: 4,
        timestamp: d.getTime(),
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
        addComment: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (studentId, rate, description) => {
                return {
                    payload: {
                        id: nanoid(),
                        studentId,
                        rate,
                        timestamp: new Date().getTime(),
                        description
                    }
                }
            }
        }
    }
})

export const selectAllComments = (state) => state.comments

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer