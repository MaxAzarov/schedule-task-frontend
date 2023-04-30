import { IntegrationType } from "./integration.types";

export interface IntegrationApi {
  accessToken: string;
  refreshToken: string;
  type: IntegrationType;
}
