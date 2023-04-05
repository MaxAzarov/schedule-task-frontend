import { Button, ButtonProps } from "@mui/material";

interface ConnectButtonProps extends ButtonProps {
  text: string;
}

export function ConnectButton({ text, ...props }: ConnectButtonProps) {
  return (
    <Button variant="contained" {...props} fullWidth>
      {text}
    </Button>
  );
}
