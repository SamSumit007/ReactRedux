import axios from "axios"
import {GET_FEEDS_ERROR, GET_FEEDS_LODING, GET_FEEDS_LOGOUT, GET_FEEDS_SUCCESS,} from './feedtypes'


 export const getFeedsAPI = () => (dispatch)=>{
    dispatch({type: GET_FEEDS_LODING})
    axios.get("http://localhost:8080/feeds")
    .then((r)=> {
        dispatch({type: GET_FEEDS_SUCCESS, payload: r.data})
    });
    dispatch ({type: GET_FEEDS_ERROR});
};
export const logout = () => ({type: GET_FEEDS_LOGOUT})