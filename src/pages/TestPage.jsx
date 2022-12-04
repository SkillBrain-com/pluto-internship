import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "../components/shared/button/Button";
import Badge from "../components/shared/Badge/Badge";

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

        <Box ml={4}>
          <Badge variant="standard" badgeContent={3} color="primary"></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={"Pending"}
            color="pending"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={"In Progress"}
            color="inProgress"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={"In Review"}
            color="inReview"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={"Unassigned"}
            color="unassigned"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={"Unassigned"}
            color="unassignedGrey"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={5}
            color="primaryLight"
          ></Badge>
        </Box>
        <Box ml={4}>
          <Badge
            variant="standard"
            badgeContent={5}
            color="secondaryLight"
          ></Badge>
        </Box>
      </Container>
    </div>
  );
}

export default Test;
