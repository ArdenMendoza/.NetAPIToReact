import { LOGIN_ACTION_TYPES } from '../actions/loginActions';


const initialState = {
    isShown: false,
    message: 'reducer default text'
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.USER_LOG_IN:
            return {
                ...state,
                isShown: action.payload.isShown,
                message: action.payload.msg
            }
        default:
            break;
    }
    return state;
}