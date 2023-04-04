import { Typography } from "@mui/material";

export function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: "20px" }}
    >
      Copyright ©{new Date().getFullYear()}.
    </Typography>
  );
}
