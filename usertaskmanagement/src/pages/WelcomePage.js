import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import * as taskActions from '../store/actions/userTaskActions';


const WelcomePage = (props) => {
    console.log(props.user);
    return (
        <div className={'WelcomePage'} style={{lineHeight: '200px', fontSize:'3em', textAlign: 'center'}}>
            Welcome {props.user.firstName}!
        </div>
    )
}


const mapStateToProps = state => ({
    user: state.userReducer.user,
    userTasks: state.userTaskReducer.userTasks
})

const mapActionToProps = {
    fetchAllUsers: userActions.fetchAll,
    fetchUserTasks: (id) => taskActions.fetchByUserId(id)
}

export default connect(mapStateToProps, mapActionToProps)(WelcomePage);