import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import { cacheKeys } from "./trelloIntegrations.cacheKeys";
import {
  GetColumnsBoardsRequest,
  GetColumnsBoardsResponse,
} from "src/api/trelloIntegration/getColumns/apiTypes";
import { useNotify } from "src/components/SnackbarAlert";

export function useTrelloColumns(
  params: GetColumnsBoardsRequest,
  options?: Omit<
    UseQueryOptions<GetColumnsBoardsResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const notify = useNotify();
  const { data, ...rest } = useQuery(
    cacheKeys.getColumns(),
    async () => {
      return await Api.getTrelloColumns(params);
    },
    {
      onError: () => {
        notify("error", "Can not get user`s boards. Please reconnect");
      },
    }
  );

  return {
    columns: data,
    ...rest,
  };
}
