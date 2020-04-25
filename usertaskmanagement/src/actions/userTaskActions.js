import api from './api';

export const USER_TASK_ACTION_TYPES = {
    FETCH_BY_ID: 'FETCH_BY_ID' ,
    UPDATE: 'UPDATE'
}


export const fetchById = (id) => dispatch => {
    api.tasks().fetchById(id)
        .then(res => {
            dispatch({
                type: USER_TASK_ACTION_TYPES.FETCH_BY_ID,
                payload: res.data.objList
            })
        })
        .catch(err => console.log(err))
}

export const update = (taskId, updatedRecord) => dispatch => {
    api.tasks().update(taskId, updatedRecord)
        .then(res => {
            debugger;
            dispatch({
                type: USER_TASK_ACTION_TYPES.UPDATE,
                payload: res.data.objList
            })
        })
        .catch(err => console.log(err))
}