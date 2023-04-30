import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { cacheKeys } from "./integrations.cacheKeys";
import { Api } from "src/api/api";
import {
  GetIntegrationRequest,
  GetIntegrationResponse,
} from "src/api/integrations/getIntegration/apiTypes";
import { APIErrorResponse } from "src/api/commonTypes/api";

export function useSingleIntegration(
  params: GetIntegrationRequest,
  options?: Omit<
    UseQueryOptions<GetIntegrationResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const { data, ...rest } = useQuery(
    cacheKeys.getIntegration(params.type),
    async () => {
      return await Api.getIntegration(params);
    },
    options
  );

  return {
    integration: data,
    ...rest,
  };
}
