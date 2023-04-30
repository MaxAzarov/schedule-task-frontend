import { IntegrationType } from "src/api/commonTypes";

export interface DeleteIntegrationRequestApi {
  id: number;
  type: IntegrationType;
}

export interface DeleteIntegrationResponseApi {}
