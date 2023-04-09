import { GetApiFunc, makeEndpoint } from "../base";

import { createUser } from "./createUser/createUser";
import { updateUser } from "./updateUser/updateUser";

export function createUsersApi(getApi: GetApiFunc) {
  return {
    createUser: makeEndpoint(createUser, getApi),
    updateUser: makeEndpoint(updateUser, getApi),
  };
}
