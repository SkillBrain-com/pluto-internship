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
          <br />
          <br />
          <br />
          <Typography gutterBottom>
            Preview of Users to Add shows up here component.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Add Team
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AssignTaskModal;
