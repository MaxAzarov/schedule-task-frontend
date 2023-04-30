import { mapRequest, mapResponse } from "./mappers";
import { getColumnsApi } from "./getColumns.api";
import { GetJiraColumnsRequest, GetJiraColumnsResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getColumns = async (
  getApi: GetApiFunc,
  request: GetJiraColumnsRequest
): Promise<GetJiraColumnsResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await getColumnsApi(api, requestApi).then(mapResponse);
};
