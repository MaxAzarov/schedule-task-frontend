import { deleteIntegrationApi } from "./deleteIntegration.api";
import {
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
} from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const deleteIntegration = async (
  getApi: GetApiFunc,
  request: DeleteIntegrationRequest
): Promise<DeleteIntegrationResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await deleteIntegrationApi(api, requestApi).then(mapResponse);
};
