import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as navActions from '../store/actions/navActions';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import UserTasksGrid from './UserTasksPage';

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

const selectedView = (selectedView) => {
    switch (selectedView) {
        case 'welcomePage':
            return <WelcomePage />;
        case 'taskListPage':
            return <UserTasksGrid />;
        default:
            return <LoginPage />;
    }
}

const MainPage = (props) => {
    const classes = useStyles();
    useEffect(() => {

    }, [props]); // alternative to componentDidMount
    return (
        <div className={'appRoot'}>
            <AppBar position="static">
                <Toolbar>
                    <CheckListIcon />
                    <Typography variant="h6" className={classes.title}>Task List Manager</Typography>
                    {props.user.userId &&
                        <div>
                            <Button onClick={() => props.navigate('welcomePage')} color="inherit">Home</Button>
                            <Button onClick={() => props.navigate('taskListPage')} color="inherit">Tasks List</Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>
            {selectedView(props.selectedView)}
        </div>
    )
}


const mapStateToProps = state => ({
    user: state.userReducer.user,
    selectedView: state.navReducer.selectedView
})

const mapActionToProps = {
    navigate: dest => navActions.navigate(dest)
}

export default connect(mapStateToProps, mapActionToProps)(MainPage);