import { mapRequest, mapResponse } from "./mappers";
import { getBoardsApi } from "./getBoards.api";
import { GetJiraBoardsRequest, GetJiraBoardsResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getBoards = async (
  getApi: GetApiFunc,
  request: GetJiraBoardsRequest
): Promise<GetJiraBoardsResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await getBoardsApi(api, requestApi).then(mapResponse);
};
