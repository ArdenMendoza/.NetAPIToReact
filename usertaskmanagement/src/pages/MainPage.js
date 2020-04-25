import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import * as taskActions from '../store/actions/userTaskActions';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import CheckListIcon from '@material-ui/icons/PlaylistAddCheckRounded';

import { Typography, Button, IconButton, Toolbar, AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '15px'
    },
}));

const MainPage = (props) => {
    const classes = useStyles();
    useEffect(() => {

    }, [props]); // alternative to componentDidMount
    return (
        <div className={'appRoot'}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <CheckListIcon />
                    <Typography variant="h6" className={classes.title}>Task List Manager</Typography>
                    {props.user.userId && <Button color="inherit">Task List</Button>}

                </Toolbar>
            </AppBar>
            {(!props.user.userId) ? <LoginPage /> : <WelcomePage />}
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