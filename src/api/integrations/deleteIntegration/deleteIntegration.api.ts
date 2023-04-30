import { AxiosInstance, AxiosResponse } from "axios";

import {
  DeleteIntegrationRequestApi,
  DeleteIntegrationResponseApi,
} from "./apiTypes.server";

export const deleteIntegrationApi = async (
  api: AxiosInstance,
  requestApi: DeleteIntegrationRequestApi
): Promise<DeleteIntegrationResponseApi> => {
  const { data } = await api.request<
    DeleteIntegrationResponseApi,
    AxiosResponse<DeleteIntegrationResponseApi>
  >({
    method: "delete",
    url: `integrations/${requestApi.id}`,
  });

  return data;
};
