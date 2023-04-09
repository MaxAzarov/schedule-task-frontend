import { AxiosInstance, AxiosResponse } from "axios";

import { CreateUserRequestApi, CreateUserResponseApi } from "./apiTypes.server";

export const createUserApi = async (
  api: AxiosInstance,
  requestApi: CreateUserRequestApi
): Promise<CreateUserResponseApi> => {
  const { data } = await api.request<
    CreateUserResponseApi,
    AxiosResponse<CreateUserResponseApi>
  >({
    method: "post",
    url: "users",
    data: requestApi,
  });

  return data;
};
