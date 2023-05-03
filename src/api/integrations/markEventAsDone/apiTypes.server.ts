import { Event } from "react-big-calendar";
import { EventType } from "src/api/commonTypes";

export interface MarkEventAsDoneRequestApi {
  eventId: string;
  type: EventType;
}

export interface MarkEventAsDoneResponseApi extends Event {}
