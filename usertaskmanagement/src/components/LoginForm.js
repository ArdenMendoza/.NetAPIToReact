import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import { Button, TextField, Snackbar } from '@material-ui/core';


import { CommonFunctions } from '../common/commonFunctions'
const initialValues = {
    email: 'amendoza@gmail.com',
    password: 'testpass'
}




const LoginForm = (props) => {
    const { values, setValues, errors, setErrors, handleInputChange } = CommonFunctions(initialValues);

    const validate = () => {
        let temp = {}
        temp.email = values.email != '' ? '' : 'This input a valid email.';
        setErrors({ ...temp });

        return Object.values(temp).every(x => x == '');
    }

    const handleSubmit = e => {
        // () => props.validateLogin(values.email, values.password)
        e.preventDefault();
        if (validate()) {
            props.validateLogin(values.email, values.password)
        }
    }

    useEffect(() => {
        props.validateLogin(values.email, values.password)
    }, [props]) // temporary

    return (
        <div className={'loginPage'}>
            <div className={'loginForm'}>
                <div>
                    <h1>
                        Login
                    </h1>
                    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                        <TextField
                            name='email'
                            variant='standard'
                            label='Email'
                            value={values.email}
                            onChange={handleInputChange}
                            {...(errors.email && { error: true, helperText: errors.email })}
                        /> <br />
                        <TextField
                            name='password'
                            variant='standard'
                            label='Password'
                            type='password'
                            autoComplete='current-password'
                            value={values.password}
                            onChange={handleInputChange} /> <br />
                        <Button variant="contained"
                            color="primary"
                            type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
    isSnackbarOpen: false
})

const mapActionToProps = {
    validateLogin: (email, password) => loginActions.validateLogin(email, password),
}

export default connect(mapStateToProps, mapActionToProps)(LoginForm);