import { Box } from "@mui/material";
import { Media } from "../components/authentication/Media";
import { AuthForm } from "../components/authentication/AuthForm";

export const CreateAccount = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          order: 1,
          "@media (max-width: 1014px)": {
            order: 2,
          },
        }}
      >
        <Media align="left" hasCreate={false} />
      </Box>
      <Box
        sx={{
          order: 2,
          "@media (max-width: 1014px)": {
            order: 1,
          },
        }}
      >
        <AuthForm align="left" hasLogin={true} />
      </Box>
    </Box>
  );
};
