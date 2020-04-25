import { USER_TASK_ACTION_TYPES } from '../actions/userTaskActions';

const initialState = {
    userTasks: []
}

export const userTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TASK_ACTION_TYPES.FETCH_BY_ID:
            return {
                userTasks: action.payload
            }
        default:
            break;
    }
    return state;
}