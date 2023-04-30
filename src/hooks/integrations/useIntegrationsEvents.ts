import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import { cacheKeys } from "./integrations.cacheKeys";
import {
  GetUserEventsRequest,
  GetUserEventsResponse,
} from "src/api/integrations/getEvents/apiTypes";

export function useIntegrationsEvents(
  params: GetUserEventsRequest,
  options?: Omit<
    UseQueryOptions<GetUserEventsResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
) {
  const { data, ...rest } = useQuery(
    cacheKeys.getEvents(),
    async () => {
      return await Api.getIntegrationsEvents(params);
    },
    options
  );

  return {
    events: data || [],
    ...rest,
  };
}
