import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import { cacheKeys } from "./trelloIntegrations.cacheKeys";
import { GetTrelloBoardsResponse } from "src/api/trelloIntegration/getBoards/apiTypes";
import { GetTrelloBoardsRequest } from "src/api/trelloIntegration/getBoards/apiTypes";
import { useNotify } from "src/components/SnackbarAlert";

export function useTrelloBoards(
  params: GetTrelloBoardsRequest,
  options?: Omit<
    UseQueryOptions<GetTrelloBoardsResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const notify = useNotify();
  const { data, ...rest } = useQuery(
    cacheKeys.getBoards(),
    async () => {
      return await Api.getTrelloBoards(params);
    },
    {
      onError: () => {
        notify("error", "Can not get user`s boards. Please reconnect");
      },
    }
  );

  return {
    boards: data,
    ...rest,
  };
}
