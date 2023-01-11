import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const AssignTaskModal = (props) => {
  const { handleClose, open, variant } = props;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            height: "513px",
          },
        }}
      >
        <CustomDialogTitle onClose={handleClose}>Assign task</CustomDialogTitle>
        <DialogContent>
          <Typography
            gutterBottom
            sx={{
              background: "#F7F7F7",
              borderRadius: "8px",
              padding: "8px 12px",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "-0.02em",
              color: "#000000",
              marginBottom: "24px",
            }}
          >
            Preview of Users to Add shows up here component.
          </Typography>
          <Typography>Email or Username of User to Assign Task</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Assign Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AssignTaskModal;
