import { AxiosInstance, AxiosResponse } from "axios";

import { UpdateUserRequestApi, UpdateUserResponseApi } from "./apiTypes.server";

export const updateUserApi = async (
  api: AxiosInstance,
  requestApi: UpdateUserRequestApi
): Promise<UpdateUserResponseApi> => {
  const { data } = await api.request<
    UpdateUserResponseApi,
    AxiosResponse<UpdateUserResponseApi>
  >({
    method: "patch",
    url: `users/${requestApi.id}`,
    data: requestApi,
  });

  return data;
};
