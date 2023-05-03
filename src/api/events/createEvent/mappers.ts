import { CreateEventRequest, CreateEventResponse } from "./apiTypes";
import {
  CreateEventRequestApi,
  CreateEventResponseApi,
} from "./apiTypes.server";

export function mapRequest(request: CreateEventRequest): CreateEventRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: CreateEventResponseApi
): CreateEventResponse {
  return {
    ...responseApi,
  };
}
