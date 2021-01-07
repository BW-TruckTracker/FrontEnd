import {
    REGISTRTAION_START, 
REGISTRTAION_SUCCESS,
REGISTRTAION_FAILURE,
// USER_LOGIN_START ,
// USER_LOGIN_SUCCESS ,
// USER_LOGIN_FAILURE,

} from "../actions/index"

const initialState={
    data: {
        username: '',
        password: '',
        email: '',
        isLoggedIn: false,
        isFetching: false,
        current_location_lat: '',
        current_location_long: '',
        error: ''


    }
}


export const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case REGISTRTAION_START:
            return {
                ...state,
                isFetching: true

            }
        case REGISTRTAION_SUCCESS:
            return {
                ...state,
                user: {
                    username: payload.username,
                    password: payload.password,
                    email: payload.email,
                    isLoggedIn: true
                }

            }
        case REGISTRTAION_FAILURE:
            return {
                ...state,
                error: payload
            }
            default: 
            return state;
    }

}