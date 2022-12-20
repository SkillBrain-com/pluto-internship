import CustomDialogTitle from "./CustomDialogTitle";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import SignupForm from "../authentication/SignupForm";

const modalInputsStyle = {
  "& .MuiInputLabel-root": {
    marginTop: "10px",
  },
  "& .MuiOutlinedInput-root": {
    margin: "8px 0px 2px",
  },
  "& .MuiDialogTitle-root": {
    padding: "14px 16px 8px",
  },
  "& .MuiDialog-paper": {
    height: "547px",
  },
  "& .MuiButton-root": {
    width: "142px",
    marginTop: "24px",
  },
};

const EditProfileModal = (props) => {
  const { handleClose, open, variant } = props;

  return (
    <div>
      <Dialog onClose={handleClose} open={open} sx={modalInputsStyle}>
        <CustomDialogTitle onClose={handleClose}>
          Edit Profile
        </CustomDialogTitle>
        <DialogContent>
          <SignupForm buttonText="Save" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfileModal;
