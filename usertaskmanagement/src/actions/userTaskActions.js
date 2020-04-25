import api from './api';

export const USER_TASK_ACTION_TYPES = {
    FETCH_BY_ID: 'FETCH_BY_ID' ,
    UPDATE: 'UPDATE'
}


export const fetchByUserId = (id) => dispatch => {
    api.tasks().fetchByUserId(id)
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
            dispatch(fetchByUserId(updatedRecord.taskOwnerId))
        })
        .catch(err => console.log(err))
}

export const addTask = (newRecord) => dispatch => {
    api.tasks().create(newRecord)
        .then(res => {
            dispatch(fetchByUserId(newRecord.taskOwnerId))
        })
        .catch(err => console.log(err))
}

export const deleteTask = (taskOwnerId, taskId) => dispatch => {
    api.tasks().delete(taskId)
        .then(res => {
            dispatch(fetchByUserId(taskOwnerId))
        })
        .catch(err => console.log(err))
}