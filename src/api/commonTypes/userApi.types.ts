export interface UserApi {
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  password: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
