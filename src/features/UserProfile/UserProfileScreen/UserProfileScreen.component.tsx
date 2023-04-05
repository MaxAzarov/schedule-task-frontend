import { useCallback } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ConnectButton } from "src/components/buttons";
import { Config } from "src/config";
import { Header, Section } from "./UserProfileScreen.styles";

export function UserProfileScreen() {
  const handleConnectJira = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/jira/auth`;
  }, []);

  const handleConnectTrello = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/trello/auth`;
  }, []);

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
          size="large"
        >
          Save
        </Button>
      </Header>

      <Section>
        <Typography>Basic information</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
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
            />
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Typography>Security</Typography>

        <Box display="flex" gap={5}>
          <TextField
            required
            fullWidth
            name="password"
            label="Old Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Box>
      </Section>

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
