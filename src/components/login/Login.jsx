import React from "react";
import { useFormik } from 'formik';
import "./Login.css";
import { InputLabel } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            logged: ""
        },
        // validationSchema: validationSchema,
        // onSubmit: (values) => {
        //     alert(JSON.stringify(values, null, 2));
        // },
    });

    // const togglePassword = () => {
    //     return passwordType === "password" ? setPasswordType("text") : setPasswordType("password");  
    // }
    return (
        <div>
            <Box
                sx={{
                    p: 1,
                    ml: '120px',
                    mt: '212px',
                    mr: '936px',
                    mb: '288px',
                }}
            >
                <Typography 
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '24px',
                        color: '#000000',
                        mb: '32px'
                    }}
                >
                    Welcome Back.
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Typography
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            color: '#2C2E3A',
                            mb: '5px'
                        }}
                    >
                        Email Address
                    </Typography>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderRadius: "16px" },
                            },
                        }}
                        fullWidth
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        variant="outlined"
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <Typography
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            color: '#2C2E3A',
                            mt: '28px',
                            mb: '5px'
                        }}
                    >
                        Enter Your Password
                    </Typography>
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderRadius: "16px" },
                            },
                            mb: '46px'
                        }}
                        fullWidth
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" type="submit">
                        Log In
                    </Button>
                </form>
            </Box>
        </div>
    );
}

export default Login;