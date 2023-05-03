import { GetUserEventsRequest, GetUserEventsResponse } from "./apiTypes";
import {
  GetUserEventsRequestApi,
  GetUserEventsResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetUserEventsResponseApi
): GetUserEventsResponse => {
  // return responseApi;
  return responseApi.map((event) => ({
    ...event,
    // start: new Date(event.start!),
    // start: new Date(event.start!),
    start: event.start ? new Date(event.start) : undefined,
    end: event.end ? new Date(event.end) : undefined,
  }));
};

export const mapRequest = (
  requestApi: GetUserEventsRequestApi
): GetUserEventsRequest => {
  return requestApi;
};
