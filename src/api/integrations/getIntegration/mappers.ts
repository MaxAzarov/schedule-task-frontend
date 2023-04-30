import { GetIntegrationRequest, GetIntegrationResponse } from "./apiTypes";
import {
  GetIntegrationRequestApi,
  GetIntegrationResponseApi,
} from "./apiTypes.server";

export const mapResponse = (
  responseApi: GetIntegrationResponseApi
): GetIntegrationResponse => {
  if (!responseApi) return null;

  return {
    ...responseApi,
  };
};

export const mapRequest = (
  requestApi: GetIntegrationRequestApi
): GetIntegrationRequest => {
  return requestApi;
};
