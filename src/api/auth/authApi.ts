import { GetApiFunc, makeEndpoint } from "../base";
import { getMe } from "./getMe/getMe";

import { login } from "./login/login";

export function createAuthApi(getApi: GetApiFunc) {
  return {
    login: makeEndpoint(login, getApi),
    getMe: makeEndpoint(getMe, getApi),
  };
}
