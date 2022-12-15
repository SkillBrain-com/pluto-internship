import { Stack } from "@mui/material";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import RecoverPasswordForm from "../components/shared/recover-password-form/RecoverPasswordForm";

export const RecoverPasswordPage = () => {
  return (
    <Stack spacing={3} padding="30px">
      <Stack direction="row" spacing={10}>
        <RecoverPasswordWrapper>
          <RecoverPasswordForm />
        </RecoverPasswordWrapper>
      </Stack>
    </Stack>
  );
};
