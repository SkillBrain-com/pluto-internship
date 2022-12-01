import { Alert, Box, Stack, AlertTitle } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";

const MuiAlert = () => {
  return (
    <Box
      m={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Stack spacing={2}>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            background: "#F7002B",
            borderRadius: "12px",
          }}
          variant="filled"
          icon={
            <WarningAmberRoundedIcon
              sx={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#FFFFFF",
            }}
          >
            Error Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            background: "#FBBE37",
            borderRadius: "12px",
          }}
        >
          <ErrorOutlineRoundedIcon
            sx={{
              background: "#0000000D 5%",
              color: "#FFFFFF",
              marginLeft: 2,
            }}
          />
          <Stack sx={{ marginRight: 9 }}>
            <AlertTitle
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#16171D",
              }}
            >
              Warning Message
            </AlertTitle>
            <AlertTitle
              sx={{
                fontWeight: 300,
                fontSize: 12,
                fontStyle: "italic",
                color: "#16171D",
              }}
            >
              Some message
            </AlertTitle>
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
            }}
          />
        </Stack>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            background: "#00C271",
            borderRadius: "12px",
          }}
          variant="filled"
          icon={
            <WarningAmberRoundedIcon
              sx={{
                background: "#FFFFFF26 15%",
                color: "#FFFFFF",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#FFFFFF",
            }}
          >
            Success Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            background: "#6684FF",
            borderRadius: "12px",
          }}
          variant="filled"
          icon={
            <WarningAmberRoundedIcon
              sx={{
                background: "#FFFFFF26 15%",
                color: "#FFFFFF",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#FFFFFF",
            }}
          >
            Info Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#F7002B",
          }}
          variant="outlined"
          severity="error"
          icon={
            <WarningAmberRoundedIcon
              sx={{
                background: "#FB151A0F 6%",
                color: "#B80020",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#B80020",
            }}
          >
            Some Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#B80020",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#FBBE37",
          }}
          variant="outlined"
          severity="warning"
          icon={
            <WarningAmberRoundedIcon
              sx={{
                background: "#FAAE0514 8%",
                color: "#FAAE05",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#FBBE37",
            }}
          >
            Some Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#FBBE37",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#00C271",
          }}
          variant="outlined"
          severity="success"
          icon={
            <DoneRoundedIcon
              sx={{
                background: "#E6FFF4",
                color: "#00C271",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#00C271",
            }}
          >
            Some Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#00C271",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
        <Alert
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#6684FF",
          }}
          variant="outlined"
          severity="info"
          icon={
            <CheckCircleRoundedIcon
              sx={{
                background: "#EDF0FC",
                color: "#6684FF",
              }}
            />
          }
          onClose={{}}
        >
          <AlertTitle
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#6684FF",
            }}
          >
            Some Message
          </AlertTitle>
          <AlertTitle
            sx={{
              fontWeight: 300,
              fontSize: 12,
              fontStyle: "italic",
              color: "#6684FF",
            }}
          >
            Some message
          </AlertTitle>
        </Alert>
      </Stack>
    </Box>
  );
};

export default MuiAlert;
