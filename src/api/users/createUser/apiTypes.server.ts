import { UserApi } from "src/api/commonTypes";

export interface CreateUserRequestApi
  extends Omit<UserApi, "deletedAt" | "createdAt" | "updatedAt"> {}

export interface CreateUserResponseApi extends UserApi {}
