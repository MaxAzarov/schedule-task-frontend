import { User } from "src/api/commonTypes/user.types";

export interface UserProfileForm
  extends Omit<User, "deletedAt" | "updatedAt" | "createdAt"> {
  oldPassword: string;
}
