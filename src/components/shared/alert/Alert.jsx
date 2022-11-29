// import { styled } from "@mui/material/styles";
import { Alert, Box, Typography, Stack } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const MuiAlert = () => {
  return (
    <Box m={2}>
      <Typography variant="h5" color="secondary" align="center">
        Alerts / Toasts
      </Typography>
      <Stack spacing={2}>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="filled"
          severity="error"
          onClose={{}}
        >
          This is sample alert
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="filled"
          severity="warning"
          onClose={{}}
        >
          This is sample alert
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="filled"
          severity="success"
          onClose={{}}
        >
          This is sample alert
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="filled"
          severity="info"
          onClose={{}}
        >
          This is sample alert
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="outlined"
          severity="error"
          onClose={{}}
        >
          Some message Some message
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="outlined"
          severity="warning"
          onClose={{}}
        >
          This is sample alert
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="outlined"
          severity="success"
          icon={<CheckCircleIcon />}
          onClose={{}}
        >
          This is sample alert
        </Alert>
        <Alert
          sx={{ width: 350, height: 81, gap: 10 }}
          variant="outlined"
          severity="info"
          icon={<CheckCircleIcon />}
          onClose={{}}
        >
          This is sample alert
        </Alert>
      </Stack>
    </Box>
  );
};

export default MuiAlert;
