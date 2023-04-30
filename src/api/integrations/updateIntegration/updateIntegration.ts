import { updateIntegrationApi } from "./updateIntegration.api";
import {
  UpdateIntegrationRequest,
  UpdateIntegrationResponse,
} from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const updateIntegration = async (
  getApi: GetApiFunc,
  request: UpdateIntegrationRequest
): Promise<UpdateIntegrationResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await updateIntegrationApi(api, requestApi).then(mapResponse);
};
