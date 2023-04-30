import { mapRequest, mapResponse } from "./mappers";
import { getColumnsApi } from "./getBoards.api";
import { GetColumnsBoardsRequest, GetColumnsBoardsResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getColumns = async (
  getApi: GetApiFunc,
  request: GetColumnsBoardsRequest
): Promise<GetColumnsBoardsResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await getColumnsApi(api, requestApi).then(mapResponse);
};
