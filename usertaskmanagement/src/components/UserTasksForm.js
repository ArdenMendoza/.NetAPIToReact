import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import * as userTaskActions from '../actions/userTaskActions';
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, makeStyles, Checkbox } from '@material-ui/core';
import EditableTable from '../common/editableTable';

import { CommonFunctions } from '../common/commonFunctions'
const initialValues = {
    email: 'amendoza@gmail.com',
    password: 'testpass'
}

const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
    tableCell: {
        textAlign: "center"
    }
});


const UserTasksGrid = (props) => {
    const classes = useStyles();
    const { values, setValues, errors, setErrors, handleInputChange } = CommonFunctions(initialValues);
    return (
        <div style={{width: '650px', margin: '0px auto'}}>
            <EditableTable userTasks={props.userTasks}/>
        </div>
    )
}



const mapStateToProps = state => ({
    userTasks: state.userTaskReducer.userTasks
})

const mapActionToProps = {
    updateRecord: (userTaskId, updatedRecord) => userTaskActions.update(userTaskId, updatedRecord),
}

export default connect(mapStateToProps, mapActionToProps)(UserTasksGrid);