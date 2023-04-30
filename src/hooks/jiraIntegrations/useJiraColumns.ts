import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";

import { GetJiraColumnsRequest } from "src/api/jiraIntegration/getColumns/apiTypes";
import { GetJiraColumnsResponseApi } from "src/api/jiraIntegration/getColumns/apiTypes.server";
import { cacheKeys } from "./jiraIntegrations.cacheKeys";

export function useJiraColumns(
  params: GetJiraColumnsRequest,
  options?: Omit<
    UseQueryOptions<GetJiraColumnsResponseApi, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const { data, ...rest } = useQuery(
    cacheKeys.getColumns(),
    async () => {
      return await Api.getJiraColumns(params);
    },
    options
  );

  return {
    columns: data,
    ...rest,
  };
}
