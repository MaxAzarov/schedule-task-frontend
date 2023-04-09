import { UserApi } from "src/api/commonTypes";

export interface UpdateUserRequestApi
  extends Omit<UserApi, "deletedAt" | "createdAt" | "updatedAt" | "password"> {
  id: string;
  oldPassword?: string;
  password?: string;
}

export interface UpdateUserResponseApi extends UserApi {}
