import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    loading: false,
    error: null,
    allUser: [],
    curruntUser: {}
}




export const FetchAllData = createAsyncThunk( "user/FetchAllData", async ( data, { rejectWithValue } ) => {
    try {
        let res = await axios.get( "https://jsonplaceholder.typicode.com/users" );

        return res.data;


    } catch ( e ) {
        console.log( e )
        return rejectWithValue( e.message );
    }
} )


export const FetchUserData = createAsyncThunk( "user/FetchUserData", async ( id, { rejectWithValue } ) => {
    try {
        let res = await axios.get( `https://jsonplaceholder.typicode.com/users/${ id }` );
        return res.data;


    } catch ( e ) {

        return rejectWithValue( e.message );
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
            state.loading = false;
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
            state.loading = false;
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