import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RecoverPasswordForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      newPass: "",
      confirmPass: "",
    },
    validate: (values) => {
      const errors = {};
      const passwordRegex = /(?=.*[0-9])/;
      if (!values.newPass) {
        errors.newPass = "*Required";
      } else if (values.newPass.length < 8) {
        errors.newPass = "*Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.newPass)) {
        errors.newPass = "*Invalid password. Must contain at least one number.";
      }

      if (values.newPass && values.confirmPass) {
        if (values.newPass !== values.confirmPass) {
          errors.confirmPass = "Passwords did not match";
        }
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
        Enter New Password
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#666666",
        }}
      >
        Your account has been recovered. Enter your new password to gain full
        control of your account.
      </Typography>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <InputLabel
            htmlFor="recover-password"
            sx={{
              color: "#2c2e3a",
              lineHeight: "19px",
            }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="recover-password"
            name="newPass"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            sx={{
              width: "100%",
              marginTop: "14px",
              border: "0.7px solid #A8ABBD",
              borderRadius: "12px",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          {formik.errors.newPass && formik.touched.newPass && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                lineHeight: "14px",
                color: "#6E7391",
              }}
            >
              {formik.errors.newPass}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "26px",
          }}
        >
          <InputLabel
            htmlFor="recover-password-confirm"
            sx={{
              color: "#2c2e3a",
              lineHeight: "19px",
            }}
          >
            Password Confirm
          </InputLabel>
          <OutlinedInput
            id="recover-password-confirm"
            name="confirmPass"
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            sx={{
              width: "100%",
              marginTop: "14px",
              border: "0.7px solid #A8ABBD",
              borderRadius: "12px",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          {formik.errors.confirmPass && formik.touched.confirmPass && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                lineHeight: "14px",
                color: "#6E7391",
              }}
            >
              {formik.errors.confirmPass}
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
              width: "100px",
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RecoverPasswordForm;
