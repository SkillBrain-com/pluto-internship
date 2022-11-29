import React from "react";
import { useFormik } from 'formik';
import "./Login.css";
import { useState } from "react";

const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            logged: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const togglePassword =()=>{
        return passwordType === "password" ? setPasswordType("text") : setPasswordType("password");  
    }

    return (
        <div className="container">
            <h1>Welcome Back</h1>
            <form className="form-container">
                <label className="label" htmlFor="Email">Email Address</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="Password">Enter Your Password</label>
                <input 
                    id="password"
                    name="password"
                    type={passwordType}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}  
                />
                     <div>
                        <button onClick={togglePassword}>Eye</button>
                    </div>
                <label className="label-checkbox">
                <input 
                    id="logged"
                    name="logged"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className="checkbox"
                />Keep me Signed in</label>
                <button 
                    className="form-button" 
                    type="submit"
                >Log In</button>
                <a href="#">Forgot Password ?</a>
            </form>
        </div>
    );
}

export default Login;