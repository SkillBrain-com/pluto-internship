import React from "react";
import { useFormik } from 'formik';
import "./Login.css";
import { InputLabel } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";;

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
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Login;