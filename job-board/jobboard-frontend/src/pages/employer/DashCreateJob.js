import { Box, MenuItem, Typography, FormControl, InputLabel, Select } from '@mui/material';
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import { registerAjobAction } from '../../redux/actions/jobAction';

const validationSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('Title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    jobType: yup
        .string('Select a category')
        .required('Category is required'),
    experience: yup
        .string('Select experience level')
        .required('Experience is required'),
    skills: yup
        .string('Enter skills')
        .required('Skills are required'),
});

const DashCreateJob = () => {
    const dispatch = useDispatch();

    // Job types
    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const { jobType } = useSelector(state => state.jobTypeAll);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: '',
            experience: '',
            skills: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAjobAction(values));
            actions.resetForm();
        },
    });

    return (
        <>
            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Register a Job
                        </Typography>
                        <TextField
                            fullWidth
                            id="title"
                            label="Title"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField
                            fullWidth
                            id="salary"
                            name="salary"
                            label="Salary"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                        <TextField
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="jobType"
                            id="jobType"
                            select
                            label="Category"
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem key={""} value={""}></MenuItem>
                            {jobType && jobType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel htmlFor="experience">Experience</InputLabel>
                            <Select
                                id="experience"
                                name="experience"
                                value={formik.values.experience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.experience && Boolean(formik.errors.experience)}
                            >
                                <MenuItem value="Fresher">Fresher</MenuItem>
                                <MenuItem value="1-3 Yrs">1-3 Yrs</MenuItem>
                                <MenuItem value="3-5 Yrs">3-5 Yrs</MenuItem>
                                <MenuItem value="5-7 Yrs">5-7 Yrs</MenuItem>
                                <MenuItem value="7-9 Yrs">7-9 Yrs</MenuItem>
                                <MenuItem value="9-11 Yrs">9-11 Yrs</MenuItem>
                                <MenuItem value="11-13 Yrs">11-13 Yrs</MenuItem>
                                <MenuItem value="13-15 Yrs">13-15 Yrs</MenuItem>
                                <MenuItem value="15+ Yrs">15+ Yrs</MenuItem>
                            </Select>
                            {formik.touched.experience && formik.errors.experience && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.experience}
                                </Typography>
                            )}
                        </FormControl>
                        <TextField
                            fullWidth
                            id="skills"
                            name="skills"
                            label="Skills (Separate by Commas)"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Skills"
                            value={formik.values.skills}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.skills && Boolean(formik.errors.skills)}
                            helperText={formik.touched.skills && formik.errors.skills}
                        />
                        <Button fullWidth variant="contained" type='submit'>Create job</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default DashCreateJob;
