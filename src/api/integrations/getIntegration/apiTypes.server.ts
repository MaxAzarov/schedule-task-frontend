import { Integration, EventType } from "src/api/commonTypes";

export interface GetIntegrationRequestApi {
  type: EventType;
}

export interface GetIntegrationResponseApi extends Integration {}
