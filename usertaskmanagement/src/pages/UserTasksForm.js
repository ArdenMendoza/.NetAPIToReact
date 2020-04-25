import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as userTaskActions from '../store/actions/userTaskActions';
import EditableTable from '../components/editableTable';

const UserTasksGrid = (props) => {
    return (
        <div style={{ width: '650px', margin: '0px auto' }}>
            <EditableTable userTasks={props.userTasks}
                userId={props.userId}
                updateRecord={props.updateRecord}
                addTask={props.addTask}
                deleteTask={props.deleteTask}
            />
        </div>
    )
}



const mapStateToProps = state => ({
    userId: state.userReducer.user.userId,
    userTasks: state.userTaskReducer.userTasks
})

const mapActionToProps = {
    updateRecord: (userTaskId, updatedRecord) => userTaskActions.update(userTaskId, updatedRecord),
    reloadTasks: (id) => userTaskActions.fetchByUserId(id),
    addTask: (newRecord) => userTaskActions.addTask(newRecord),
    deleteTask: (taskOwnerId, id) => userTaskActions.deleteTask(taskOwnerId, id)
}

export default connect(mapStateToProps, mapActionToProps)(UserTasksGrid);