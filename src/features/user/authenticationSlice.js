import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    token: '',
    email: '',
    expire: 0,
    isAuthenticated: false,
    familyName: '',
    givenName: '',
    picture: '',
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setAuthentication: {
            reducer: (state, action) => {
                return {...state, ...action.payload}
            },
            prepare: (token) => {
                const login = jwtDecode(token)
                const authenticateData = {
                    token: token,
                    email: login?.email,
                    expire: login?.exp,
                    isAuthenticated: true,
                    familyName: login?.family_name,
                    givenName: login?.given_name,
                    picture: login?.picture
                }
                return { payload: authenticateData }
            }
        },
        setAuthenticated: {
            reducer: (state, action) => {
                state.isAuthenticated = action.payload
            },
            prepare: (isAuthenticated) => {
                return {payload: isAuthenticated}
            }
        }
    }
})

export const selectAuthentication = state => state.authentication
export const selectToken = state => state.authentication.token
export const selectAuthenticated = state => state.authentication.isAuthenticated
export const selectTokenActivity = state => (state.authentication.expire - Date.now()) > 0

export const { setAuthentication, setAuthenticated } = authenticationSlice.actions
export default authenticationSlice.reducer