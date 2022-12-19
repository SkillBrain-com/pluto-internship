import { Box } from "@mui/system";
import { Media } from "../components/authentication/Media";
import { LoginForm } from "../components/authentication/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <LoginForm align="left" hasLogin={false} />
      <Media align="right" hasCreate={true} />
    </Box>
  );
};

export default Login;
