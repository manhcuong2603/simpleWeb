import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getAllUserStart: (state) => {
            state.users.isFetching = true;
        },
        getAllUserSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
        },
        getAllUserFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
    },
});
const userReducer = userSlice.reducer

export const {
    getAllUserStart,
    getAllUserSuccess,
    getAllUserFailed
} = userSlice.actions
export default userReducer