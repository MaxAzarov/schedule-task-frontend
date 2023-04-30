import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import { cacheKeys } from "./trelloIntegrations.cacheKeys";
import {
  GetColumnsBoardsRequest,
  GetColumnsBoardsResponse,
} from "src/api/trelloIntegration/getColumns/apiTypes";

export function useTrelloColumns(
  params: GetColumnsBoardsRequest,
  options?: Omit<
    UseQueryOptions<GetColumnsBoardsResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const { data, ...rest } = useQuery(
    cacheKeys.getColumns(),
    async () => {
      return await Api.getTrelloColumns(params);
    },
    options
  );

  return {
    columns: data,
    ...rest,
  };
}
