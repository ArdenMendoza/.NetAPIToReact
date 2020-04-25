import { USER_ACTION_TYPES } from '../actions/userActions';

const initialState = {
    user: {},
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USER:
            return {
                user: action.payload
            }
        default:
            break;
    }
    return state;
}
