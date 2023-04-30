import { GetApiFunc, makeEndpoint } from "../base";
import { getBoards } from "./getBoards/getBoards";
import { getColumns } from "./getColumns/getBoards";

export function createTrelloIntegrationApi(getApi: GetApiFunc) {
  return {
    getTrelloBoards: makeEndpoint(getBoards, getApi),
    getTrelloColumns: makeEndpoint(getColumns, getApi),
  };
}
