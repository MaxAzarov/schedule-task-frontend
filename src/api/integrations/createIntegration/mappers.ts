import {
  CreateIntegrationRequest,
  CreateIntegrationResponse,
} from "./apiTypes";
import {
  CreateIntegrationRequestApi,
  CreateIntegrationResponseApi,
} from "./apiTypes.server";

export function mapRequest(
  request: CreateIntegrationRequest
): CreateIntegrationRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: CreateIntegrationResponseApi
): CreateIntegrationResponse {
  return {
    ...responseApi,
  };
}
