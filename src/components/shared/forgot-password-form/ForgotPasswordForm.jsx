import React from "react";
import { useFormik } from "formik";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      newPass: "",
      confirmPass: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {},
  });

  return (
    <Box
      sx={{
        maxWidth: "350px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "29px",
          letterSpacing: "-0.02em",
        }}
        gutterBottom
      >
        Forgot Password?
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          lineHeight: "14px",
          color: "#6E7391",
          width: "70%",
          minHeight: "48px",
        }}
      >
        We are sorry to hear that happened. Don't be sad, we can help you get
        back in productivity in no time.
      </Typography>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <InputLabel
            htmlFor="forgot-email"
            sx={{
              color: "#2c2e3a",
              lineHeight: "19px",
            }}
          >
            Email Address
          </InputLabel>
          <TextField
            id="forgot-email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            type="email"
            sx={{
              width: "100%",
              marginTop: "14px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  border: "0.7px solid #A8ABBD",
                  borderRadius: "12px",
                  padding: "16px",
                },
              },
            }}
          />

          {formik.errors.email && formik.touched.email && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                lineHeight: "14px",
                color: "#6E7391",
              }}
            >
              {formik.errors.email}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "26px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              height: "48px",
              width: "190px",
              textTransform: "none",
            }}
          >
            Next
          </Button>
        </Box>
      </form>
      <Box
        className="alert-box"
        sx={{
          marginTop: "40px",
        }}
      ></Box>
    </Box>
  );
};

export default ForgotPasswordForm;
