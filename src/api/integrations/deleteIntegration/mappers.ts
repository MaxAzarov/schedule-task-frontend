import {
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
} from "./apiTypes";
import {
  DeleteIntegrationRequestApi,
  DeleteIntegrationResponseApi,
} from "./apiTypes.server";

export function mapRequest(
  request: DeleteIntegrationRequest
): DeleteIntegrationRequestApi {
  return request;
}

export function mapResponse(
  responseApi: DeleteIntegrationResponseApi
): DeleteIntegrationResponse {
  return {
    ...responseApi,
  };
}
