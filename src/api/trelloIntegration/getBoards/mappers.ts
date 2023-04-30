import { GetTrelloBoardsRequest, GetTrelloBoardsResponse } from "./apiTypes";
import {
  GetTrellBoardsRequestApi,
  GetTrellBoardsResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetTrellBoardsResponseApi
): GetTrelloBoardsResponse => {
  return responseApi;
};

export const mapRequest = (
  requestApi: GetTrellBoardsRequestApi
): GetTrelloBoardsRequest => {
  return requestApi;
};
