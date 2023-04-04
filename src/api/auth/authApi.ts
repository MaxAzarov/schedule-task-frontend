import { GetApiFunc, makeEndpoint } from "../base";

import { login } from "./login/login";

export function createAuthApi(getApi: GetApiFunc) {
  return {
    login: makeEndpoint(login, getApi),
  };
}
