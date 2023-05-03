import { useState, useCallback, useMemo } from "react";
import { Event } from "react-big-calendar";
import { Box, Button, Typography } from "@mui/material";

import { BigCalendar } from "src/components/BigCalendar";
import { useIntegrationsEvents } from "src/hooks/integrations/useIntegrationsEvents";
import { useMarkEventAsDone } from "src/hooks/integrations/useMarkEventAsDone";
import { DialogStyled, MarkDoneButton } from "./DashboardScreen.styles";
import { CheckGreenCircleIcon } from "src/components/Icons";
import "react-big-calendar/lib/sass/styles.scss";
import { IntegrationType } from "src/api/commonTypes";

function getEventDescription(event: Event): string {
  if (event.resource.type === IntegrationType.jira) {
    return event.resource.description.content?.[0]?.content?.[0]?.text ?? "";
  } else if (event.resource.type === IntegrationType.trello) {
    return event.resource.desc;
  }

  return "";
}

export function DashboardScreen() {
  const { events } = useIntegrationsEvents({});
  const { mutate: markEventAsDone } = useMarkEventAsDone();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>();

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleMarkAsDone = useCallback(
    (event: Event) => {
      markEventAsDone({
        eventId: event.resource.id,
        type: event.resource.type,
      });
    },
    [markEventAsDone]
  );

  const description = useMemo(() => {
    if (selectedEvent) return getEventDescription(selectedEvent);
    return "";
  }, [selectedEvent]);

  const handleSelectSlot = () => {};

  return (
    <Box
      sx={{ my: "20px", height: "100vh" }}
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <BigCalendar
        style={{ width: "50%" }}
        events={events}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tooltipAccessor={(event) => event.title}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleEventClick}
      />

      <Box flexDirection="column" display="flex" sx={{ ml: 10 }}>
        <Button variant="contained" sx={{ mb: "10px" }}>
          Organize Current Day
        </Button>

        <Button variant="contained" sx={{ mb: "10px" }}>
          Organize Current Week
        </Button>
      </Box>

      {selectedEvent && (
        <DialogStyled open={true} onClose={() => setSelectedEvent(null)}>
          <Box
            sx={{ padding: "20px" }}
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <Typography>Title: {selectedEvent.title}</Typography>
              {selectedEvent.allDay && <Typography>All Day Event</Typography>}
              {description && <Typography>{description}</Typography>}
            </Box>

            <Box>
              <MarkDoneButton
                size="small"
                startIcon={<CheckGreenCircleIcon />}
                onClick={() => handleMarkAsDone(selectedEvent)}
              >
                <Typography variant="caption">Mark as done</Typography>
              </MarkDoneButton>
            </Box>
          </Box>
        </DialogStyled>
      )}
    </Box>
  );
}
