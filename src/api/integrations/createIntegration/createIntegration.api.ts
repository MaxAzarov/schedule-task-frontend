import { AxiosInstance, AxiosResponse } from "axios";

import {
  CreateIntegrationRequestApi,
  CreateIntegrationResponseApi,
} from "./apiTypes.server";

export const createIntegrationApi = async (
  api: AxiosInstance,
  requestApi: CreateIntegrationRequestApi
): Promise<CreateIntegrationResponseApi> => {
  const { data } = await api.request<
    CreateIntegrationResponseApi,
    AxiosResponse<CreateIntegrationResponseApi>
  >({
    method: "post",
    url: "integrations",
    data: requestApi,
  });

  return data;
};
