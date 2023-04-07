import { GetApiFunc, makeEndpoint } from "../base";

import { createUser } from "./createUser/createUser";

export function createUsersApi(getApi: GetApiFunc) {
  return {
    createUser: makeEndpoint(createUser, getApi),
  };
}
