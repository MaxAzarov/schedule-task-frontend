import { GetJiraBoardsRequest, GetJiraBoardsResponse } from "./apiTypes";
import {
  GetJiraBoardsRequestApi,
  GetJiraBoardsResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetJiraBoardsResponseApi
): GetJiraBoardsResponse => {
  return responseApi;
};

export const mapRequest = (
  requestApi: GetJiraBoardsRequestApi
): GetJiraBoardsRequest => {
  return requestApi;
};
