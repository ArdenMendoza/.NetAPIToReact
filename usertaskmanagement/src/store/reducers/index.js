import { combineReducers } from 'redux';
import { userTaskReducer } from './taskReducer';
import { userReducer } from './userReducer';
import { loginReducer } from './loginReducer';


export const reducers = combineReducers({
    userTaskReducer,
    userReducer,
    loginReducer
})