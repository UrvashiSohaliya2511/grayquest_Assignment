import axios from "axios";
import { loading, error, SetUserData, SetAllUserData } from "./UserReducer";
export const FetchAllData = async ( dispatch ) => {
    dispatch( loading() )
    try {
        let res = await axios.get( "https://jsonplaceholder.typicode.com/users" );
        dispatch( SetAllUserData( res.data ) )


    } catch ( e ) {
        dispatch( error() )
    }
};


export const FetchUserData = ( id ) => async ( dispatch ) => {
    dispatch( loading() )
    try {
        let res = await axios.get( `https://jsonplaceholder.typicode.com/users/${ id }` );
        dispatch( SetUserData( res.data ) )


    } catch ( e ) {
        dispatch( error() )
    }
};