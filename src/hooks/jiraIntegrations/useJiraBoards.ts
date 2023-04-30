import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import { GetTrelloBoardsRequest } from "src/api/trelloIntegration/getBoards/apiTypes";
import { cacheKeys } from "./jiraIntegrations.cacheKeys";
import { GetJiraBoardsResponse } from "src/api/jiraIntegration/getBoards/apiTypes";

export function useJiraBoards(
  params: GetTrelloBoardsRequest,
  options?: Omit<
    UseQueryOptions<GetJiraBoardsResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const { data, ...rest } = useQuery(
    cacheKeys.getBoards(),
    async () => {
      return await Api.getJiraBoards(params);
    },
    options
  );

  return {
    boards: data || [],
    ...rest,
  };
}
