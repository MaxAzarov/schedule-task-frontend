import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetJiraBoardsRequestApi,
  GetJiraBoardsResponseApi,
} from "./apiTypes.server";

export const getBoardsApi = async (
  api: AxiosInstance,
  request: GetJiraBoardsRequestApi
): Promise<GetJiraBoardsResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `integrations/jira/boards`,
  };

  const { data } = await api.request<
    GetJiraBoardsRequestApi,
    AxiosResponse<GetJiraBoardsResponseApi>
  >(config);

  return data;
};
