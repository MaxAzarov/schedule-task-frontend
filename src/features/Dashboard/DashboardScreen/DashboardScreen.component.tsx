import { BigCalendar } from "src/components/BigCalendar";
import "react-big-calendar/lib/sass/styles.scss";
import { Box, Button } from "@mui/material";

export function DashboardScreen() {
  return (
    <Box
      sx={{ my: "20px" }}
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <BigCalendar style={{ width: "50%" }} />

      <Box flexDirection="column" display="flex" sx={{ ml: 10 }}>
        <Button variant="contained" sx={{ mb: "10px" }}>
          Organize Current Day
        </Button>

        <Button variant="contained" sx={{ mb: "10px" }}>
          Organize Current Week
        </Button>
      </Box>
    </Box>
  );
}
