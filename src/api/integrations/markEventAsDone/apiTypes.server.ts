import { Event } from "react-big-calendar";
import { IntegrationType } from "src/api/commonTypes";

export interface MarkEventAsDoneRequestApi {
  eventId: string;
  type: IntegrationType;
}

export interface MarkEventAsDoneResponseApi extends Event {}
