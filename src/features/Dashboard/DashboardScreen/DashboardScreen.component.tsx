import { BigCalendar } from "src/components/BigCalendar";
import "react-big-calendar/lib/sass/styles.scss";
import { Box, Button } from "@mui/material";
import { useIntegrationsEvents } from "src/hooks/integrations/useIntegrationsEvents";

export function DashboardScreen() {
  const { events } = useIntegrationsEvents({});

  return (
    <Box
      sx={{ my: "20px", height: "100vh" }}
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <BigCalendar style={{ width: "50%" }} events={events} />

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
