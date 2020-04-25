import { combineReducers } from 'redux';
import { userTaskReducer } from './taskReducer';
import { userReducer } from './userReducer';
import { loginReducer } from './loginReducer';
import { navReducer } from './NavReducer';


export const reducers = combineReducers({
    userTaskReducer,
    userReducer,
    loginReducer,
    navReducer
})