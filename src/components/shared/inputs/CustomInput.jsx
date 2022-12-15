import { Stack, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

export const CustomInput = (props) => {
  const { type } = props;

  return (
    <Stack spacing={3} padding="30px">
      <Stack direction="row" spacing={10}>
        <InputLabel
          htmlFor={type}
          sx={{
            color: "#2c2e3a",
            lineHeight: "19px",
          }}
        >
          {type}
        </InputLabel>
      </Stack>
    </Stack>
  );
};

CustomInput.propTypes = {
  type: PropTypes.oneOf(["name", "email", "password"]).isRequired,
};
