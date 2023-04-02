import { Button, ButtonProps } from "@mui/material";

interface ConnectButtonProps extends ButtonProps {}

export function ConnectButton({ ...props }: ConnectButtonProps) {
  return (
    <Button variant="contained" {...props}>
      Connect
    </Button>
  );
}
