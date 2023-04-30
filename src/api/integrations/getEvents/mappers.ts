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
    start: new Date(),
    end: new Date(),
  }));
};

export const mapRequest = (
  requestApi: GetUserEventsRequestApi
): GetUserEventsRequest => {
  return requestApi;
};
