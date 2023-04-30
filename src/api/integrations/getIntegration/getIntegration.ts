import { mapRequest, mapResponse } from "./mappers";
import { getIntegrationApi } from "./getIntegration.api";
import { GetIntegrationRequest, GetIntegrationResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getIntegration = async (
  getApi: GetApiFunc,
  request: GetIntegrationRequest
): Promise<GetIntegrationResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await getIntegrationApi(api, requestApi).then(mapResponse);
};
