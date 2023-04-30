import {
  GetIntegrationRequestApi,
  GetIntegrationResponseApi,
} from "./apiTypes.server";

export interface GetIntegrationRequest extends GetIntegrationRequestApi {}

export type GetIntegrationResponse = GetIntegrationResponseApi | null;
