import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetUserEventsRequestApi,
  GetUserEventsResponseApi,
} from "./apiTypes.server";

export const geEventsApi = async (
  api: AxiosInstance,
  request: GetUserEventsRequestApi
): Promise<GetUserEventsResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `/integrations/events`,
  };

  const { data } = await api.request<
    GetUserEventsResponseApi,
    AxiosResponse<GetUserEventsResponseApi>
  >(config);

  return data;
};
