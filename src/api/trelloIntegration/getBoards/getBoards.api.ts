import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetTrellBoardsRequestApi,
  GetTrellBoardsResponseApi,
} from "./apiTypes.server";

export const getBoardsApi = async (
  api: AxiosInstance,
  request: GetTrellBoardsRequestApi
): Promise<GetTrellBoardsResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `/trello/boards`,
  };

  const { data } = await api.request<
    GetTrellBoardsResponseApi,
    AxiosResponse<GetTrellBoardsResponseApi>
  >(config);

  return data;
};
