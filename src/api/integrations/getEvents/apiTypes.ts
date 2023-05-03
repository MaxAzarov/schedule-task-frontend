import { Event } from "react-big-calendar";
import { GetUserEventsRequestApi } from "./apiTypes.server";

export interface GetUserEventsRequest extends GetUserEventsRequestApi {}

// export type GetUserEventsResponse = (Omit<Event, "start"> & { start: Date })[];
export type GetUserEventsResponse = Event[];
