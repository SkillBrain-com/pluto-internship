import * as React from "react";
import PropTypes from "prop-types";
import Button from "../shared/button/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(3),
    width: "500px",
    height: "645px",
    borderRadius: "20px",
  },
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(1),
    border: "none",
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
    justifyContent: "flex-start",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const AddMatesDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Add Mates Form
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ p: "36px" }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ fontWeight: 600, fontSize: "28px", lineHeight: "34px" }}
        >
          Add Team Mates to <br /> Workspace.
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Insert Tab component.</Typography>
          <Typography gutterBottom>Insert email input component.</Typography>
          <Typography gutterBottom>
            Preview of Users to Add shows up here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Add Team
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
