import { AxiosInstance, AxiosResponse } from "axios";

import {
  UpdateIntegrationRequestApi,
  UpdateIntegrationResponseApi,
} from "./apiTypes.server";

export const updateIntegrationApi = async (
  api: AxiosInstance,
  requestApi: UpdateIntegrationRequestApi
): Promise<UpdateIntegrationResponseApi> => {
  const { data } = await api.request<
    UpdateIntegrationResponseApi,
    AxiosResponse<UpdateIntegrationResponseApi>
  >({
    method: "put",
    url: `integrations/${requestApi.id}`,
    data: requestApi,
  });

  return data;
};
