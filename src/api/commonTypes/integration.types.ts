export enum IntegrationType {
  "jira" = "jira",
  "trello" = "trello",
}

export interface Integration {
  id: number;
  userId: string;
  accessToken: string;
  refreshToken: string;
  type: IntegrationType;
  todoColumnId?: string;
  readyColumnId?: string;
  email: string;
  projectId?: string;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}
