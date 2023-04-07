import { CreateUserResponse, CreateUserRequest } from "./apiTypes";
import { CreateUserRequestApi, CreateUserResponseApi } from "./apiTypes.server";

export function mapRequest(request: CreateUserRequest): CreateUserRequestApi {
  return {
    ...request,
  };
}

export function mapResponse(
  responseApi: CreateUserResponseApi
): CreateUserResponse {
  return {
    ...responseApi,
  };
}
