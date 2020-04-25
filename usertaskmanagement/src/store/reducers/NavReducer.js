import { USER_ACTION_TYPES } from '../actions/userActions';

const initialState = {
    selectedView: '', // 'loginPage' | 'welcomePage' | 'taskListPage',
}

export const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USER:
            return {
                selectedView: action.payload
            }
        default:
            break;
    }
    return state;
}
