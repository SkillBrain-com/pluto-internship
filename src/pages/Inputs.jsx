import { Stack } from "@mui/material";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";
import { CustomInput } from "../components/shared/inputs/CustomInput";

export const Inputs = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={10}>
        <CustomInput type="name" />
      </Stack>
    </Stack>
  );
};
