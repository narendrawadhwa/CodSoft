import { Avatar, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userSignUpAction } from '../redux/actions/userAction';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password should be at least 8 characters long';
    }

    if (!values.role) {
        errors.role = 'Select at least one role';
    }

    if (values.role === 'jobSeeker') {
        if (!values.fullName) {
            errors.fullName = 'Full Name is required';
        } 

        if (!values.bio) {
            errors.bio = 'Bio is required';
        } else if (values.bio.length < 20 || values.bio.length > 250) {
            errors.bio = 'Bio should be between 20 and 250 characters';
        }
    } else if (values.role === 'employer') {
        if (!values.companyName) {
            errors.companyName = 'Company Name is required';
        }
        if (!values.about) {
            errors.about = 'About Company is required';
        } else if (values.about.length < 20 || values.about.length > 250) {
            errors.about = 'About Company should be between 20 and 250 characters';
        }
        // Remove the bio validation for employers
        delete errors.bio;
    }

    return errors;
};

const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: '',
            fullName: '',
            companyName: '',
            about: '',
            bio: '',
        },
        validate,
        onSubmit: (values, actions) => {
            // Send the selected role as 0 for Job Seeker or 1 for Employer
            const roleValue = values.role === 'jobSeeker' ? 0 : 1;
            const fullNameValue = values.role === 'employer' ? values.companyName : values.fullName;
            dispatch(userSignUpAction({ ...values, role: roleValue, fullName: fullNameValue }));
            actions.resetForm();
        }
    });

    return (
        <>
            <Navbar />
            <Box sx={{ height: '110vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <RadioGroup
                            aria-label="role"
                            name="role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            sx={{ flexDirection: 'row', justifyContent: 'center', mb: 3 }}
                        >
                            <FormControlLabel
                                value="jobSeeker"
                                control={<Radio />}
                                label="Job Seeker"
                            />
                            <FormControlLabel
                                value="employer"
                                control={<Radio />}
                                label="Employer"
                            />
                        </RadioGroup>
                        {formik.values.role === 'employer' ? (
                            <>
                                <TextField
                                    sx={{
                                        mb: 3,
                                        "& .MuiInputBase-root": {
                                            color: 'text.secondary',
                                        },
                                        fieldset: { borderColor: "rgb(231, 235, 240)" }
                                    }}
                                    fullWidth
                                    id="companyName"
                                    label="Company Name"
                                    name='companyName'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Company Name"
                                    value={formik.values.companyName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                    helperText={formik.touched.companyName && formik.errors.companyName}
                                />
                                <TextField
                                    sx={{
                                        mb: 3,
                                        "& .MuiInputBase-root": {
                                            color: 'text.secondary',
                                        },
                                        fieldset: { borderColor: "rgb(231, 235, 240)" }
                                    }}
                                    fullWidth
                                    id="about"
                                    label="About Company"
                                    name='about'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="About Company"
                                    value={formik.values.about}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.about && Boolean(formik.errors.about)}
                                    helperText={formik.touched.about && formik.errors.about}
                                />
                                                                <TextField
    sx={{
        mb: 3,
        "& .MuiInputBase-root": {
            color: 'text.secondary',
        },
        fieldset: { borderColor: "rgb(231, 235, 240)" }
    }}
    fullWidth
    id="email"
    label="E-mail"
    name='email'
    InputLabelProps={{
        shrink: true,
    }}
    placeholder="E-mail"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
/>

<TextField
    sx={{
        mb: 3,
        "& .MuiInputBase-root": {
            color: 'text.secondary',
        },
        fieldset: { borderColor: "rgb(231, 235, 240)" }
    }}
    fullWidth
    id="password"
    name="password"
    label="Password"
    type="password"
    InputLabelProps={{
        shrink: true,
    }}
    placeholder="Password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
/>
                            </>
                        ) : (
                            <>
                                <TextField
                                    sx={{
                                        mb: 3,
                                        "& .MuiInputBase-root": {
                                            color: 'text.secondary',
                                        },
                                        fieldset: { borderColor: "rgb(231, 235, 240)" }
                                    }}
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    name='fullName'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    sx={{
                                        mb: 3,
                                        "& .MuiInputBase-root": {
                                            color: 'text.secondary',
                                        },
                                        fieldset: { borderColor: "rgb(231, 235, 240)" }
                                    }}
                                    fullWidth
                                    id="bio"
                                    label="Bio"
                                    name='bio'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                <TextField
    sx={{
        mb: 3,
        "& .MuiInputBase-root": {
            color: 'text.secondary',
        },
        fieldset: { borderColor: "rgb(231, 235, 240)" }
    }}
    fullWidth
    id="email"
    label="E-mail"
    name='email'
    InputLabelProps={{
        shrink: true,
    }}
    placeholder="E-mail"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
/>

<TextField
    sx={{
        mb: 3,
        "& .MuiInputBase-root": {
            color: 'text.secondary',
        },
        fieldset: { borderColor: "rgb(231, 235, 240)" }
    }}
    fullWidth
    id="password"
    name="password"
    label="Password"
    type="password"
    InputLabelProps={{
        shrink: true,
    }}
    placeholder="Password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
/>
                            </>
                        )}
                        <Button fullWidth variant="contained" type='submit' >Register</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default Register;
