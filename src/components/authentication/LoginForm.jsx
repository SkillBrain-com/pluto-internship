import { Stack, Typography, Link } from "@mui/material";
import PropTypes from "prop-types";
import { HalfPage } from "../shared/layout/HalfPage";
import Button from "../shared/button/Button";
import SigninForm from "./SigninForm";

export const LoginForm = (props) => {
  const { align, hasLogin } = props;

  return (
    <HalfPage sx={{ background: "#fff", alignItems: "center" }}>
      <Stack
        direction="row"
        justifyContent="end"
        visibility={hasLogin ? "visible" : "hidden"}
      >
        <Button variant="login">Log In</Button>
      </Stack>

      <Stack
        sx={{
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "-0.02em",
            textAlign: align,
          }}
        >
          Welcome Back.
        </Typography>

        <SigninForm />

        <Stack>
          <Link
            href="/forgot"
            underline="none"
            sx={{
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "-0.02em",
              paddingTop: "52px",
              textAlign: align,
            }}
          >
            Forgot Password?
          </Link>
        </Stack>
      </Stack>
    </HalfPage>
  );
};

LoginForm.propTypes = {
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  hasLogin: PropTypes.bool.isRequired,
};
