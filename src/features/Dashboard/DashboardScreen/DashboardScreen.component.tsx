import { BigCalendar } from "src/components/BigCalendar";
import "react-big-calendar/lib/sass/styles.scss";
import { Container } from "@mui/material";

export function DashboardScreen() {
  return (
    <Container sx={{ mt: "20px" }}>
      <BigCalendar />
    </Container>
  );
}
