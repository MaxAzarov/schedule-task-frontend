import { markEventAsDoneApi } from "./markEventAsDone.api";
import { MarkEventAsDoneRequest, MarkEventAsDoneResponse } from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const markEventAsDone = async (
  getApi: GetApiFunc,
  request: MarkEventAsDoneRequest
): Promise<MarkEventAsDoneResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await markEventAsDoneApi(api, requestApi).then(mapResponse);
};
