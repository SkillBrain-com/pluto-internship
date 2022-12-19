import { Box, Stack, Typography } from "@mui/material";
import Button from "../shared/button/Button";
import PropTypes from "prop-types";
import { HalfPage } from "../shared/layout/HalfPage";
import loginLeft from "../../assets/images/login-left.png";
import loginRight from "../../assets/images/login-right.png";

const selectBackgroundImage = (align) => {
  switch (align) {
    case "left":
      return `#fff url(${loginLeft}) no-repeat center right`;
    case "right":
      return `#fff url(${loginRight}) no-repeat center left`;
    default:
      return `#fff url(${loginLeft}) no-repeat center right`;
  }
};

export const Media = (props) => {
  const { align, hasCreate } = props;
  return (
    <HalfPage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          padding: "24px 100px 100px 100px",
          background: selectBackgroundImage(align),
          backgroundSize: "cover",
        }}
      >
        <Stack
          direction="row"
          justifyContent="end"
          visibility={hasCreate ? "visible" : "hidden"}
        >
          <Button variant="create" href="/createaccount">
            Create Account
          </Button>
        </Stack>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "56px",
            lineHeight: "66px",
            letterSpacing: "-0.02em",
            textAlign: align,
          }}
        >
          Take your <br /> productivity to the <br /> next level.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "66px",
            textAlign: align,
          }}
        >
          SkillBrain 2022 | All Rights Reserved
        </Typography>
      </Box>
    </HalfPage>
  );
};

Media.propTypes = {
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  hasCreate: PropTypes.bool.isRequired,
};
