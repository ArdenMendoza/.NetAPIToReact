import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as taskActions from '../actions/userTaskActions';
import LoginForm from '../components/LoginForm';
import UserTasksPage from '../components/UserTasksForm';
import CustomSnackbar from '../components/notifs/Snackbar';

const MainPage = (props) => {

    useEffect(() => {

    }, [props]); // alternative to componentDidMount
    return (
        <div className={'appRoot'}>
            {(!props.user.userId) ? <LoginForm /> : <UserTasksPage/>}
            {/* <CustomSnackbar isOpen={props.snackbar.isShown} message={props.snackbar.message} /> */}
        </div>
    )
}


const mapStateToProps = state => ({
    snackbar: state.loginReducer,
    user: state.userReducer.user,
    userTasks: state.userTaskReducer.userTasks
})

const mapActionToProps = {
    fetchAllUsers: userActions.fetchAll,
    fetchUserTasks: (id) => taskActions.fetchByUserId(id)
}

export default connect(mapStateToProps, mapActionToProps)(MainPage);