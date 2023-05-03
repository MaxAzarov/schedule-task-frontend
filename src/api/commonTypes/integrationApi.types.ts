import { EventType } from "./integration.types";

export interface IntegrationApi {
  accessToken: string;
  refreshToken: string;
  type: EventType;
}
