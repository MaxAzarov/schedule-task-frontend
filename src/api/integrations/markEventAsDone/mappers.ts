import { MarkEventAsDoneRequest, MarkEventAsDoneResponse } from "./apiTypes";
import {
  MarkEventAsDoneRequestApi,
  MarkEventAsDoneResponseApi,
} from "./apiTypes.server";

export function mapRequest(
  request: MarkEventAsDoneRequest
): MarkEventAsDoneRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: MarkEventAsDoneResponseApi
): MarkEventAsDoneResponse {
  return {
    ...responseApi,
  };
}
