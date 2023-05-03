import { createEventApi } from "./createEvent.api";
import { CreateEventRequest, CreateEventResponse } from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const createEvent = async (
  getApi: GetApiFunc,
  request: CreateEventRequest
): Promise<CreateEventResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await createEventApi(api, requestApi).then(mapResponse);
};
