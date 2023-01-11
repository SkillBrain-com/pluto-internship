import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUserAction } from "../../store/app/app.slice";

const AssignTaskModal = (props) => {
  const { handleClose, open, variant, title } = props;
  //const dispatch = useDispatch();
  // const userList = useSelector((state) => state.app.auth.getUser.allUsers);

  // const allUserList = dispatch(getAllUserAction());
  // console.log("all USER LIST:", allUserList);

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
            {title}
          </Typography>
          <Typography>Email or Username of User to Assign Task</Typography>
          <Autocomplete
            disablePortal
            id="get-all-users"
            sx={{
              width: "100%",
            }}
            renderInput={(params) => <TextField {...params} />}
          />
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
