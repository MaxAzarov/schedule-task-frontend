import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Header, Section } from "./UserProfileScreen.styles";
import { useCurrentUser } from "src/hooks/auth/useCurrentUser";
import { UserProfileForm } from "../UserProfile.types";
import FormikTextField from "src/components/formik/FormikTextField/FormikTextField.component";
import userProfileSchema from "./UserProfileScreen.schema";
import { useUpdateUser } from "src/hooks/users/useUpdateUser";
import { UpdateUserRequest } from "src/api/users/updateUser/apiTypes";
import { useSignout } from "src/hooks/auth/useSignout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreateIntegration } from "src/hooks/integrations/useCreateIntegration";
import { IntegrationType } from "src/api/commonTypes";
import { ROUTES } from "src/routing/routes";
import IntegrationsButtons from "./IntegrationsButtons/IntegrationsButtons.component";

export function UserProfileScreen() {
  const { currentUser, isLoading } = useCurrentUser();
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: createIntegration } = useCreateIntegration();
  const { signout } = useSignout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");

  const createUserIntegration = useCallback(
    async (
      type: IntegrationType,
      accessToken: string,
      refreshToken: string
    ) => {
      await createIntegration({
        type,
        accessToken,
        refreshToken,
      });
    },
    [createIntegration]
  );

  useEffect(() => {
    // TODO: find other way to create integration

    async function create() {
      if (type && accessToken && refreshToken) {
        await createUserIntegration(
          type as IntegrationType,
          accessToken as string,
          refreshToken as string
        );

        navigate(ROUTES.profile);
      }
    }
    create();
  }, [accessToken, createUserIntegration, navigate, refreshToken, type]);

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

  const handleSignout = useCallback(() => {
    signout();
  }, [signout]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container sx={{ minHeight: "100vh" }}>
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
              title="Old Password"
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

        <IntegrationsButtons />
      </Section>

      <Button
        onClick={handleSignout}
        variant="contained"
        sx={{ marginLeft: "auto", display: "flex", my: "20px" }}
      >
        Sign out
      </Button>
    </Container>
  );
}
