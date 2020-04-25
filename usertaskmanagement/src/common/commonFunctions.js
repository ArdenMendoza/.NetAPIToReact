import { useState } from 'react';

export const CommonFunctions = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);

    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}