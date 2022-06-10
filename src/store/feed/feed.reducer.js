import { GET_FEEDS_ERROR, GET_FEEDS_LODING,
     GET_FEEDS_SUCCESS } from "./feedtypes";

const initialState= {
    getFeeds:{
    loading: false,
    error: false,
   
    },data: []
}

export const feedReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case   GET_FEEDS_LODING: {
            return{
                ...state, 
                getFeeds:{ ...state.getFeeds,
                    loading: true,
                error: false,
                
                },
            };
        }
        
        case   GET_FEEDS_SUCCESS: {
            return{
                ...state, 
                getFeeds:{ ...state.getFeeds,
                    loading: true,
                error: false,
                },
                data: payload,
            };
        }
        case   GET_FEEDS_ERROR: {
            return{
                ...state, 
                getFeeds:{ ...state.getFeeds,
                    loading: true,
                error: false,
                },
            };
        }
        default: {
            return state;
        }
    }
}