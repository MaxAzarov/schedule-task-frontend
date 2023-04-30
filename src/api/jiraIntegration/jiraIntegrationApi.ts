import { GetApiFunc, makeEndpoint } from "../base";
import { getBoards } from "./getBoards/getBoards";
import { getColumns } from "./getColumns/getColumns";

export function createJiraIntegrationApi(getApi: GetApiFunc) {
  return {
    getJiraBoards: makeEndpoint(getBoards, getApi),
    getJiraColumns: makeEndpoint(getColumns, getApi),
  };
}
