import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  GetIntegrationRequestApi,
  GetIntegrationResponseApi,
} from "./apiTypes.server";

export const getIntegrationApi = async (
  api: AxiosInstance,
  request: GetIntegrationRequestApi
): Promise<GetIntegrationResponseApi> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `/integrations/${request.type}`,
  };

  const { data } = await api.request<
    GetIntegrationResponseApi,
    AxiosResponse<GetIntegrationResponseApi>
  >(config);

  return data;
};
