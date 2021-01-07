import {CREATE_TRUCK,UPDATE_TRUCK} from "../actions/trucksActions";

const initialState = {

 imgOfTruck: '',
 cuisineType: '',
 customerRatings: [],
 customerRatingAvg: 0, 
}

export function truckReducer (state= initialState, action){
    switch (action.type){
        case CREATE_TRUCK:
            return{
                ...state,
                posts: {
                    body: action.payload,
                }
                
            }

        case UPDATE_TRUCK:
            return{
                ...state,
                posts:{
                    body: action.payload,
                }
            }

        default:
            return state;
    }
}