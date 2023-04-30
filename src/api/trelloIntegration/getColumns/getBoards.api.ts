import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetTrellColumnsRequestApi,
  GetTrellColumnsResponseApi,
} from "./apiTypes.server";

export const getColumnsApi = async (
  api: AxiosInstance,
  request: GetTrellColumnsRequestApi
): Promise<GetTrellColumnsResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `/trello/board/list`,
  };

  const { data } = await api.request<
    GetTrellColumnsResponseApi,
    AxiosResponse<GetTrellColumnsResponseApi>
  >(config);

  return data;
};
