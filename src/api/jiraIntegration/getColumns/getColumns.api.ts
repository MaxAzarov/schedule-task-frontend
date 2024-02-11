import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetJiraColumnsRequestApi,
  GetJiraColumnsResponseApi,
} from "./apiTypes.server";

export const getColumnsApi = async (
  api: AxiosInstance,
  request: GetJiraColumnsRequestApi
): Promise<GetJiraColumnsResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `integrations/jira/project/statuses`,
  };

  const { data } = await api.request<
    GetJiraColumnsResponseApi,
    AxiosResponse<GetJiraColumnsResponseApi>
  >(config);

  return data;
};
