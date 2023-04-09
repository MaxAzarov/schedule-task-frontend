import { UpdateUserResponse, UpdateUserRequest } from "./apiTypes";
import { UpdateUserRequestApi, UpdateUserResponseApi } from "./apiTypes.server";

export function mapRequest(request: UpdateUserRequest): UpdateUserRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: UpdateUserResponseApi
): UpdateUserResponse {
  return {
    ...responseApi,
  };
}
