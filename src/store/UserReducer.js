import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: false,
    allUser: [],
    curruntUser: {}
}

export const UserReducer = createSlice( {
    name: 'Users',
    initialState,
    reducers: {
        loading: ( state ) => {
            state.loading = true;
        },
        error: ( state ) => {
            state.error = true;
        },
        SetUserData: ( state, { payload } ) => {
            state.loading = false;
            state.error = false;
            state.curruntUser = payload;


        },
        SetAllUserData: ( state, { payload } ) => {

            state.loading = false;
            state.error = false;
            state.allUser = payload;
        },

    },
} )

// Action creators are generated for each case reducer function
export const { loading, error, SetUserData, SetAllUserData } = UserReducer.actions

export default UserReducer.reducer