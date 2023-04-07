import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import signupSchema from "./Signup.schema";
import { ROUTES } from "src/routing/routes";
import { useCreateUser } from "src/hooks/users/useCreateUser";

export function SignupScreen() {
  const { mutate: createUser } = useCreateUser();
  const form = useFormik({
    validationSchema: signupSchema,
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: async (form) => {
      await createUser({
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        phone: "",
      });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form onSubmit={form.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={form.handleChange}
                error={!!form.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={form.handleChange}
                error={!!form.errors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={form.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={form.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={form.isSubmitting}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href={ROUTES.login} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
