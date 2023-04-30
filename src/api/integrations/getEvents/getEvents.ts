import { mapRequest, mapResponse } from "./mappers";
import { geEventsApi } from "./getEvents.api";
import { GetUserEventsRequest, GetUserEventsResponse } from "./apiTypes";
import { GetApiFunc } from "src/api/base";

export const getIntegrationsEvents = async (
  getApi: GetApiFunc,
  request: GetUserEventsRequest
): Promise<GetUserEventsResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await geEventsApi(api, requestApi).then(mapResponse);
};
