import {
  GetTrellColumnsRequestApi,
  GetTrellColumnsResponseApi,
} from "./apiTypes.server";

export interface GetColumnsBoardsRequest extends GetTrellColumnsRequestApi {}

export type GetColumnsBoardsResponse = GetTrellColumnsResponseApi;
