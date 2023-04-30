import { Integration, IntegrationType } from "src/api/commonTypes";

export interface UpdateIntegrationRequestApi {
  id: number;
  projectId?: string;
  type: IntegrationType;
  todoColumnId?: string;
  readyColumnId?: string;
}

export interface UpdateIntegrationResponseApi extends Partial<Integration> {}
