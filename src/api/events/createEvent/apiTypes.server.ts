import { UserEvent } from "src/api/commonTypes/userEvent.types";
import { UserEventApi } from "src/api/commonTypes/userEventApi.types";

export interface CreateEventRequestApi extends UserEventApi {}

export interface CreateEventResponseApi extends UserEvent {}
