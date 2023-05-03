export enum EventType {
  "jira" = "jira",
  "trello" = "trello",
  "custom" = "custom",
}

export interface Integration {
  id: number;
  userId: string;
  accessToken: string;
  refreshToken: string;
  type: EventType;
  todoColumnId?: string;
  readyColumnId?: string;
  email: string;
  projectId?: string;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}
