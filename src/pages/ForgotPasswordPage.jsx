import { Stack } from "@mui/material";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import ForgotPasswordForm from "../components/shared/forgot-password-form/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  return (
    <Stack spacing={3} padding="30px">
      <Stack direction="row" spacing={10}>
        <RecoverPasswordWrapper>
          <ForgotPasswordForm />
        </RecoverPasswordWrapper>
      </Stack>
    </Stack>
  );
};
