import { AxiosError } from "axios";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import { APIErrorResponse } from "src/api/commonTypes/api";

import { cacheKeys } from "./auth.cacheKeys";
import { Api } from "src/api/api";
import { GetMeResponse } from "src/api/auth/getMe/apiTypes";
import { User } from "src/api/commonTypes/user.types";

export const useCurrentUser = (
  options?: Omit<
    UseQueryOptions<GetMeResponse, AxiosError<APIErrorResponse>>,
    "queryFn" | "queryKey"
  >
): Omit<
  ExclusifyUnion<
    | ReturnType<typeof useQuery<unknown, AxiosError<APIErrorResponse>>> & {
        currentUser: User;
      }
  >,
  "data"
> => {
  const { data, ...rest } = useQuery(
    cacheKeys.currentUser() as QueryKey,
    async () => {
      return await Api.getMe();
    },
    { retry: false, retryOnMount: false, staleTime: 5 * 60 * 1000, ...options }
  );

  return {
    currentUser: data as User,
    ...rest,
  };
};
