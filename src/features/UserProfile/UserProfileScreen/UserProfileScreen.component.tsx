import { useFormik } from "formik";
import { useCallback } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ConnectButton } from "src/components/buttons";
import { Config } from "src/config";
import { Header, Section } from "./UserProfileScreen.styles";
import { useCurrentUser } from "src/hooks/auth/useCurrentUser";
import { UserProfileForm } from "../UserProfile.types";
import FormikTextField from "src/components/formik/FormikTextField/FormikTextField.component";
import userProfileSchema from "./UserProfileScreen.schema";
import { useUpdateUser } from "src/hooks/users/useUpdateUser";
import { UpdateUserRequest } from "src/api/users/updateUser/apiTypes";

export function UserProfileScreen() {
  const { currentUser, isLoading } = useCurrentUser();
  const { mutate: updateUser } = useUpdateUser();

  const form = useFormik<UserProfileForm>({
    validationSchema: userProfileSchema,
    initialValues: { ...currentUser, password: "" },
    onSubmit: async (form) => {
      const user: UpdateUserRequest = {
        id: currentUser.id,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: "",
      };

      if (form.password && form.oldPassword) {
        user.password = form.password;
        user.oldPassword = form.oldPassword;
      }

      await updateUser(user);
    },
  });

  const handleConnectJira = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/jira/auth`;
  }, []);

  const handleConnectTrello = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/trello/auth`;
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      <Header>
        <Typography component="h1" variant="h5">
          Profile & Settings
        </Typography>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={form.submitForm}
          disabled={!form.dirty}
        >
          Save
        </Button>
      </Header>

      <form onSubmit={form.handleSubmit}>
        <Section>
          <Typography>Basic information</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormikTextField
                name="firstName"
                label="First Name"
                form={form}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                name="lastName"
                label="Last Name"
                form={form}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                name="email"
                label="Email Address"
                form={form}
                required
                fullWidth
                disabled
              />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Typography>Security</Typography>

          <Box display="flex" gap={5}>
            <FormikTextField
              name="oldPassword"
              label="Old Password"
              form={form}
              required
              fullWidth
            />
            <FormikTextField
              name="password"
              label="New Password"
              form={form}
              required
              fullWidth
            />
          </Box>
        </Section>
      </form>

      <Section>
        <Typography>Integrations</Typography>

        <Box>
          <ConnectButton
            onClick={handleConnectJira}
            text="Connect Jira account"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          />
          <ConnectButton
            onClick={handleConnectTrello}
            text="Connect Trello account"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          />
        </Box>
      </Section>
    </Container>
  );
}
