import { AxiosInstance, AxiosResponse } from "axios";

import {
  MarkEventAsDoneRequestApi,
  MarkEventAsDoneResponseApi,
} from "./apiTypes.server";

export const markEventAsDoneApi = async (
  api: AxiosInstance,
  requestApi: MarkEventAsDoneRequestApi
): Promise<MarkEventAsDoneResponseApi> => {
  const { data } = await api.request<
    MarkEventAsDoneResponseApi,
    AxiosResponse<MarkEventAsDoneResponseApi>
  >({
    method: "put",
    url: `integrations/event/${requestApi.eventId}/done`,
    data: requestApi,
  });

  return data;
};
