import {
  UpdateIntegrationRequest,
  UpdateIntegrationResponse,
} from "./apiTypes";
import {
  UpdateIntegrationRequestApi,
  UpdateIntegrationResponseApi,
} from "./apiTypes.server";

export function mapRequest(
  request: UpdateIntegrationRequest
): UpdateIntegrationRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: UpdateIntegrationResponseApi
): UpdateIntegrationResponse {
  return {
    ...responseApi,
  };
}
