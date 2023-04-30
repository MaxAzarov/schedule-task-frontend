import { Event } from "react-big-calendar";
import {
  GetUserEventsRequestApi,
  GetUserEventsResponseApi,
} from "./apiTypes.server";

export interface GetUserEventsRequest extends GetUserEventsRequestApi {}

export type GetUserEventsResponse = (Omit<Event, "start"> & { start: Date })[];
