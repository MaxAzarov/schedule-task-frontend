import { Integration } from "src/api/commonTypes";
import { IntegrationApi } from "src/api/commonTypes/integrationApi.types";

export interface CreateIntegrationRequestApi extends IntegrationApi {}

export interface CreateIntegrationResponseApi extends Integration {}
