import { createUserApi } from "./login.api";
import { CreateUserRequest, CreateUserResponse } from "./apiTypes";
import { mapRequest, mapResponse } from "./mappers";
import { GetApiFunc } from "../../base";

export const createUser = async (
  getApi: GetApiFunc,
  request: CreateUserRequest
): Promise<CreateUserResponse> => {
  const api = await getApi();
  const requestApi = mapRequest(request);

  return await createUserApi(api, requestApi).then(mapResponse);
};
