import { GetJiraColumnsRequest, GetJiraColumnsResponse } from "./apiTypes";
import {
  GetJiraColumnsRequestApi,
  GetJiraColumnsResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetJiraColumnsResponseApi
): GetJiraColumnsResponse => {
  return responseApi;
};

export const mapRequest = (
  requestApi: GetJiraColumnsRequestApi
): GetJiraColumnsRequest => {
  return requestApi;
};
