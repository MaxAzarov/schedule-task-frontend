import { AxiosInstance, AxiosResponse } from "axios";

import {
  CreateEventRequestApi,
  CreateEventResponseApi,
} from "./apiTypes.server";

export const createEventApi = async (
  api: AxiosInstance,
  requestApi: CreateEventRequestApi
): Promise<CreateEventResponseApi> => {
  const { data } = await api.request<
    CreateEventResponseApi,
    AxiosResponse<CreateEventResponseApi>
  >({
    method: "post",
    url: "events",
    data: requestApi,
  });

  return data;
};
