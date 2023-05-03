import { GetApiFunc, makeEndpoint } from "../base";
import { createEvent } from "./createEvent/createEvent";

export function createEventsApi(getApi: GetApiFunc) {
  return {
    createEvent: makeEndpoint(createEvent, getApi),
  };
}
