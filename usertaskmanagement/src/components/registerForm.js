import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../store/actions/loginActions';
import { Button, TextField, Snackbar } from '@material-ui/core';


import { CommonFunctions } from '../common/commonFunctions'
const initialValues = {
    regFirstName: '',
    regLastName: '',
    regEmail: '', 
    regPassword: '', 
    regConfirmPassword: ''
}


const RegistrationPage = (props) => {
    const { values, setValues, errors, setErrors, handleInputChange } = CommonFunctions(initialValues);

    const validate = () => {
        let temp = {}
        temp.regFirstName = values.regFirstName != '' ? '' : 'Please input a First Name.';
        temp.regLastName = values.regLastName != '' ? '' : 'Please input a Last Name.';
        temp.regEmail = values.regEmail != '' ? '' : 'Please input a valid email.';
        temp.regPassword = values.regPassword === '' ? 'Please inpute a password' : (values.regPassword === values.regConfirmPassword) ? '' : 'Passwords dont match';
        setErrors({ ...temp });

        return Object.values(temp).every(x => x == '');
    }

    const handleSubmit = e => {
        // () => props.validateLogin(values.email, values.password)
        e.preventDefault();
        if (validate()) {
            props.userRegister(values)
        }
    }

    return (
        <div>
            <h1>
                Register
                    </h1>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <TextField
                    name='regFirstName'
                    variant='outlined'
                    label='First Name'
                    value={values.regFirstName}
                    onChange={handleInputChange}
                    {...(errors.regFirstName && { error: true, helperText: errors.regFirstName })} /> <br />
                <TextField
                    name='regLastName'
                    variant='outlined'
                    label='Last Name'
                    value={values.regLastName}
                    onChange={handleInputChange}
                    {...(errors.regLastName && { error: true, helperText: errors.regLastName })} /> <br />
                <TextField
                    name='regEmail'
                    variant='outlined'
                    label='Email'
                    value={values.regEmail}
                    onChange={handleInputChange}
                    {...(errors.regEmail && { error: true, helperText: errors.regEmail })} /> <br />
                <TextField
                    name='regPassword'
                    variant='outlined'
                    label='Password'
                    type='password'
                    value={values.regPassword}
                    onChange={handleInputChange}
                    {...(errors.regPassword && { error: true, helperText: errors.regPassword })}
                /> <br />
                <TextField
                    name='regConfirmPassword'
                    variant='outlined'
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
    userRegister: newUser => loginActions.register(newUser)
}

export default connect(mapStateToProps, mapActionToProps)(RegistrationPage);