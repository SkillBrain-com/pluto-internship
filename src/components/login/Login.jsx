import React from "react";
import { useFormik } from 'formik';
import { useState } from "react";
import "./Login.css";

const Login = () => {
    // const [email, useEmail] = useState("");
    // const [password, usePassword] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="container">
            <h1>Welcome Back</h1>
            <form className="form-container">
                <label htmlFor="Email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="Email">Enter Your Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;