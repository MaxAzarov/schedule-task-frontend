import { GetColumnsBoardsRequest, GetColumnsBoardsResponse } from "./apiTypes";
import {
  GetTrellColumnsRequestApi,
  GetTrellColumnsResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetTrellColumnsResponseApi
): GetColumnsBoardsResponse => {
  return responseApi;
};

export const mapRequest = (
  requestApi: GetTrellColumnsRequestApi
): GetColumnsBoardsRequest => {
  return requestApi;
};
