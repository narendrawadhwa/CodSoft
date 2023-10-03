import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, InputBase } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './SearchInputEl.css'; // Import a CSS file for styling

const validationSchema = yup.object({
    search: yup
        .string('Enter your search query')
        .required('This field cannot be empty'),
});

const SearchInputEl = () => {
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate('/');
        }
        actions.resetForm();
    }

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            search: '',
        },
        validationSchema: validationSchema,
        onSubmit
    });

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <InputBase
                    sx={{ bgcolor: 'white', padding: '10px' }}
                    fullWidth={true}
                    id="search"
                    name="search"
                    label="search"
                    placeholder='ex: developer, front end'
                    value={values.search}
                    onChange={handleChange}
                    error={touched.search && Boolean(errors.search)}
                />
                <button className="btn btn1">Search</button>
            </Box>
            <Box component='span' sx={{ color: 'orange' }}>{touched.search && errors.search}</Box>
        </form>
    );
};

export default SearchInputEl;
