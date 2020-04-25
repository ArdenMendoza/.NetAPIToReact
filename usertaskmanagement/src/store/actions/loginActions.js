import React from 'react';
import api from './api';
import * as userTaskActions from './userTaskActions';
import { USER_ACTION_TYPES } from '../actions/userActions';


export const LOGIN_ACTION_TYPES = {
    USER_LOG_IN: 'USER_LOGIN',
    USER_REGISTER: 'USER_REGISTER' 
}

export const validateLogin = (email, password) => dispatch => {
    api.users().login({ email, password })
        .then(res => {
            if (res.data.message == 'Login successful') {
                dispatch({
                    type: USER_ACTION_TYPES.GET_USER,
                    payload: res.data.obj
                })
                dispatch(
                    userTaskActions.fetchByUserId(res.data.obj.userId)
                )
                dispatch(
                    showDialog('Login Successful')
                )
            }
        })
        .catch(err => console.log(err))
}

export const showDialog = (msg) => dispatch => {
    dispatch({
        type: LOGIN_ACTION_TYPES.USER_LOG_IN,
        payload: { isShown: true, msg }
    })
}

export const hideDialog = (msg) => dispatch => {
    dispatch({
        type: LOGIN_ACTION_TYPES.USER_LOG_IN,
        payload: { isShown: false, msg }
    })
}

export const register = (newRecord) => dispatch => {
    api.users().register(newRecord)
        .then(res => {
            if (res.data.message == 'Registration Complete') {
                // dispatch({
                //     type: LOGIN_ACTION_TYPES.USER_REGISTER,
                //     payload: res.data.obj
                // })
            }
        })
        .catch(err => console.log(err))
}