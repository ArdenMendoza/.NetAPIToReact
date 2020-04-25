import React from 'react';

export const NAV_ACTION_TYPES = {
    NAV_TASKLIST_OPEN: 'NAV_TASKLIST_OPEN',
}

export const taskListOpen = () => dispatch => {
    dispatch({
        type: NAV_ACTION_TYPES.NAV_TASKLIST_OPEN,
        payload: { selectedView: 'taskListPage' }
    })
}
