import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import { Button, TextField, Snackbar } from '@material-ui/core';


import { CommonFunctions } from '../common/commonFunctions'
const initialValues = {
    email: '', // 'amendoza@gmail.com',
    password: '', // 'testpass'
}




const RegistrationPage = (props) => {
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
        <div>
            <h1>
                Register
                    </h1>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <TextField
                    name='regFirstName'
                    variant='standard'
                    label='First Name'
                    value={values.regFirstName}
                    onChange={handleInputChange}
                    {...(errors.firstName && { error: true, helperText: errors.firstName })} /> <br />
                <TextField
                    name='regLastName'
                    variant='standard'
                    label='Last Name'
                    value={values.regLastName}
                    onChange={handleInputChange}
                    {...(errors.lastName && { error: true, helperText: errors.lastName })} /> <br />
                <TextField
                    name='regEmail'
                    variant='standard'
                    label='Email'
                    value={values.regEmail}
                    onChange={handleInputChange}
                    {...(errors.email && { error: true, helperText: errors.email })} /> <br />
                <TextField
                    name='regPassword'
                    variant='standard'
                    label='Password'
                    type='password'
                    value={values.regPassword}
                    onChange={handleInputChange} /> <br />
                <TextField
                    name='regConfirmPassword'
                    variant='standard'
                    label='Confirm Password'
                    type='password'
                    value={values.regConfirmPassword}
                    onChange={handleInputChange} /> <br />
                <Button variant="contained"
                    color="primary"
                    type="submit">Register</Button>
            </form>
        </div>
    )
}



const mapStateToProps = state => ({
    isSnackbarOpen: false
})

const mapActionToProps = {
    validateLogin: (email, password) => loginActions.validateLogin(email, password),
}

export default connect(mapStateToProps, mapActionToProps)(RegistrationPage);