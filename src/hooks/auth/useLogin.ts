import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { LoginRequest, LoginResponse } from "src/api/auth/login/apiTypes";
import { appStorage } from "src/services/appStorage";
import { Api } from "src/api/api";

export const useLogin = () => {
  const mutation = useMutation<
    LoginResponse,
    AxiosError<APIErrorResponse>,
    LoginRequest
  >(
    (data: LoginRequest) => {
      return Api.login(data);
    },
    {
      onSuccess: async ({ jwtToken }) => {
        await appStorage.setApiToken(jwtToken);
      },
      onError: (error) => {},
    }
  );

  return mutation;
};
