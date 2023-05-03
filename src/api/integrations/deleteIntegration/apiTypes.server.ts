import { EventType } from "src/api/commonTypes";

export interface DeleteIntegrationRequestApi {
  id: number;
  type: EventType;
}

export interface DeleteIntegrationResponseApi {}
