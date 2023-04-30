import { mapRequest, mapResponse } from "./mappers";
import { getBoardsApi } from "./getBoards.api";
import { GetTrelloBoardsRequest, GetTrelloBoardsResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getBoards = async (
  getApi: GetApiFunc,
  request: GetTrelloBoardsRequest
): Promise<GetTrelloBoardsResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await getBoardsApi(api, requestApi).then(mapResponse);
};
