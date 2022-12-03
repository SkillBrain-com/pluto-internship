import { Box, Stack, AlertTitle } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { styled } from "@mui/material/styles";

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
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            background: "#F7002B",
            borderRadius: "12px",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 12 }}>
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              color: "#FFFFFF",
              marginRight: 2,
              marginBottom: 4,
            }}
          />
        </Stack>

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
              width: 40,
              height: 40,
              background: "#0000000D 5%",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
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
              color: "#16171D",
            }}
          />
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            background: "#00C271",
            borderRadius: "12px",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#FFFFFF26 15%",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 9 }}>
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#FFFFFF",
            }}
          />
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            background: "#6684FF",
            borderRadius: "12px",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#FFFFFF26 15%",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 14 }}>
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#FFFFFF",
            }}
          />
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#F7002B",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#FB151A0F 6%",
              color: "#B80020",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 11 }}>
            <AlertTitle
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#B80020",
              }}
            >
              Some message
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#B80020",
            }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#FBBE37",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#FAAE0514 8%",
              color: "#FAAE05",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 11 }}>
            <AlertTitle
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#FBBE37",
              }}
            >
              Some message
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#FBBE37",
            }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#00C271",
          }}
        >
          <DoneRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#E6FFF4",
              color: "#00C271",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 11 }}>
            <AlertTitle
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#00C271",
              }}
            >
              Some message
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#00C271",
            }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 350,
            height: 81,
            border: 1.6,
            borderRadius: "12px",
            borderColor: "#6684FF",
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              width: 40,
              height: 40,
              background: "#EDF0FC",
              color: "#6684FF",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 2,
              padding: 1,
            }}
          />
          <Stack sx={{ marginRight: 11 }}>
            <AlertTitle
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#6684FF",
              }}
            >
              Some message
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
          </Stack>
          <CloseOutlinedIcon
            sx={{
              marginRight: 2,
              marginBottom: 4,
              color: "#6684FF",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiAlert;
