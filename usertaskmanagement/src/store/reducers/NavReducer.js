import { USER_ACTION_TYPES } from '../actions/userActions';
import { NAV_ACTION_TYPES } from '../actions/navActions';

const initialState = {
    selectedView: '', // 'loginPage' | 'welcomePage' | 'taskListPage',
}

export const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.GET_USER:
            return {
                selectedView: 'welcomePage'
            }
        case NAV_ACTION_TYPES.NAV_TASKLIST_OPEN:
            return {
                selectedView: action.payload
            }
        default:
            break;
    }
    return state;
}
