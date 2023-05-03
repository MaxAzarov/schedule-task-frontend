import { Integration, EventType } from "src/api/commonTypes";

export interface UpdateIntegrationRequestApi {
  id: number;
  projectId?: string;
  type: EventType;
  todoColumnId?: string;
  readyColumnId?: string;
}

export interface UpdateIntegrationResponseApi extends Partial<Integration> {}
