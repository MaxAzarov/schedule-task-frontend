import { updateUserApi } from "./updateUser.api";
import { UpdateUserResponse, UpdateUserRequest } from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const updateUser = async (
  getApi: GetApiFunc,
  request: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await updateUserApi(api, requestApi).then(mapResponse);
};
