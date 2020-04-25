import React from 'react';
import api from './api';
import { fetchByUserId } from './userTaskActions';

export const USER_ACTION_TYPES = {
    GET_USER:'GET_USER'
}

export const fetchAll = () => dispatch => {
    api.users().fetchAll()
        .then(res => {
            dispatch({
                // type: USER_ACTION_TYPES.GET,
                // payload: res.data
            })
        })
        .catch(err => console.log(err))
}