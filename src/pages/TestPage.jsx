import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "../components/shared/button/Button";
import Badge from "../components/shared/Badge/Badge";

import SideBar from "../components/shared/side-bar/SideBar";
import Chart from "../assets/icons/icon/filled/Chart";
import Chat from "../assets/icons/icon/filled/Chat";
import Notification from "../assets/icons/icon/filled/Notification";
import Overview from "../assets/icons/icon/filled/Overview";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import Stack from '@mui/material/Stack';

function Test() {
  const theme = useTheme();
  return (

    <div>  

      <Container
        sx={{
          border: theme.palette.primary.main,
        }}
      >
        <Paper>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
        </Paper>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
        <Button sx={{ width: 190 }} size="large" variant="contained">
          Test
        </Button>
        <Button size="medium" variant="link">
          Test
        </Button>
        <Button disabled size="small" variant="contained">
          Test
        </Button>
        <Stack spacing={2}>
          <Badge variant="standard" color="inProgress">test</Badge>
        </Stack>
        <SideBar />
        <Chart />
        <Chat />
        <Notification />
        <Overview />
      </Container>
      <RecoverPasswordWrapper>
        <Typography variant="body1" gutterBottom>
          Content of the recover password form,
          <br />
          or forgot password form will be placed here
        </Typography>
      </RecoverPasswordWrapper>
    </div>
  );


}

export default Test;
