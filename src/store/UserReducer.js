import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    loading: false,
    error: null,
    allUser: [],
    curruntUser: {}
}




export const FetchAllData = createAsyncThunk( "user/FetchAllData", async () => {
    try {
        let res = await axios.get( "https://jsonplaceholder.typicode.com/users" );
        return res.data;


    } catch ( e ) {
        return e.message;
    }
} )


export const FetchUserData = createAsyncThunk( "user/FetchUserData", async ( id ) => {
    try {
        let res = await axios.get( `https://jsonplaceholder.typicode.com/users/${ id }` );
        return res.data;


    } catch ( e ) {
        return e.message;
    }
} )



export const UserReducer = createSlice( {
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers: {
        [ FetchUserData.pending ]: ( state ) => {
            state.loading = true;
        },
        [ FetchUserData.rejected ]: ( state, { payload } ) => {
            state.error = payload;
        },
        [ FetchUserData.fulfilled ]: ( state, { payload } ) => {
            state.loading = false;
            state.error = null;
            state.curruntUser = payload;


        },
        [ FetchAllData.pending ]: ( state ) => {
            state.loading = true;
        },
        [ FetchAllData.rejected ]: ( state, { payload } ) => {
            state.error = payload;
        },
        [ FetchAllData.fulfilled ]: ( state, { payload } ) => {
            state.loading = false;
            state.error = null;
            state.allUser = payload;


        },


    },
} )


export const { loading, error, SetUserData, SetAllUserData } = UserReducer.actions

export default UserReducer.reducer