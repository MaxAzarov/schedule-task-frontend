import { createIntegrationApi } from "./createIntegration.api";
import {
  CreateIntegrationRequest,
  CreateIntegrationResponse,
} from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const createIntegration = async (
  getApi: GetApiFunc,
  request: CreateIntegrationRequest
): Promise<CreateIntegrationResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await createIntegrationApi(api, requestApi).then(mapResponse);
};
