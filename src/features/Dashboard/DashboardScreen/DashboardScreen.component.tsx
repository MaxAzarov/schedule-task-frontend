import { useState, useCallback, useMemo, useEffect } from "react";
import { Event } from "react-big-calendar";
import { Box, Button, TextField, Typography } from "@mui/material";
import io from "socket.io-client";

import { BigCalendar } from "src/components/BigCalendar";
import { useIntegrationsEvents } from "src/hooks/integrations/useIntegrationsEvents";
import { useMarkEventAsDone } from "src/hooks/integrations/useMarkEventAsDone";
import { DialogStyled, MarkDoneButton } from "./DashboardScreen.styles";
import { CheckGreenCircleIcon } from "src/components/Icons";
import "react-big-calendar/lib/sass/styles.scss";
import { EventType } from "src/api/commonTypes";
import { useCreateEvent } from "src/hooks/events/useCreateEvent";

const socket = io("http://localhost:5000");

function getEventDescription(event: Event): string {
  if (event.resource.type === EventType.jira) {
    return event.resource.description.content?.[0]?.content?.[0]?.text ?? "";
  } else if (event.resource.type === EventType.trello) {
    return event.resource.desc;
  }

  return "";
}

export function DashboardScreen() {
  const { events, refetch: refechEvents } = useIntegrationsEvents({});
  const { mutate: markEventAsDone } = useMarkEventAsDone();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>();
  const [newEvent, setNewEvent] = useState<Event>({});
  const { mutate: createEvent } = useCreateEvent();
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

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

  useEffect(() => {
    socket.on("refetchEvents", () => {
      refechEvents();
    });

    return () => {
      socket.disconnect();
    };
  }, [refechEvents]);

  const description = useMemo(() => {
    if (selectedEvent) return getEventDescription(selectedEvent);
    return "";
  }, [selectedEvent]);

  const handleSelectSlot = (event: Event) => {
    setNewEvent({
      end: event.end,
      start: event.start,
    });

    setIsOpenCreateModal(true);
  };

  const handleCreateEvent = () => {
    createEvent({
      end: newEvent.end?.toJSON()!,
      start: newEvent.start?.toJSON()!,
      title: newEvent.title as string,
      resource: {
        type: EventType.custom,
      },
    });

    setIsOpenCreateModal(false);
  };

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

      <DialogStyled
        open={isOpenCreateModal}
        onClose={() => setIsOpenCreateModal(false)}
      >
        <Box sx={{ padding: "20px" }}>
          <p>Create Event</p>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Event name"
            autoFocus
            onChange={(e) => {
              setNewEvent((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleCreateEvent}
          >
            Create
          </Button>
        </Box>
      </DialogStyled>
    </Box>
  );
}
