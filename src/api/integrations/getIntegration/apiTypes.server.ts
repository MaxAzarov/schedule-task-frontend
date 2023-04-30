import { Integration, IntegrationType } from "src/api/commonTypes";

export interface GetIntegrationRequestApi {
  type: IntegrationType;
}

export interface GetIntegrationResponseApi extends Integration {}
