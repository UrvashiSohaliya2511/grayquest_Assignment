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
    extraReducers: ( builder ) => {
        builder.addCase( FetchUserData.pending, ( state ) => {
            state.loading = true;
        } ).addCase( FetchUserData.rejected, ( state, { payload } ) => {
            state.error = payload;
            state.loading = false;
        } ).addCase( FetchUserData.fulfilled, ( state, { payload } ) => {
            state.loading = false;
            state.error = null;
            state.curruntUser = payload;


        } ).addCase(
            FetchAllData.pending, ( state ) => {
                state.loading = true;
            },
        ).addCase( FetchAllData.rejected, ( state, { payload } ) => {
            state.error = payload;
            state.loading = false;
        } ).addCase( FetchAllData.fulfilled, ( state, { payload } ) => {

            state.loading = false;
            state.error = null;
            state.allUser = payload;
        } )






    },
} )


export default UserReducer.reducer