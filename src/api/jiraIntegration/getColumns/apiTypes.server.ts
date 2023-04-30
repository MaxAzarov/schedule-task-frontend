import { JiraProjectStatus } from "src/api/commonTypes/jiraColumns.types";

export interface GetJiraColumnsRequestApi {}

export type GetJiraColumnsResponseApi = JiraProjectStatus[];
