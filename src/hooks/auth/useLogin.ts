import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { LoginRequest, LoginResponse } from "src/api/auth/login/apiTypes";
import { appStorage } from "src/services/appStorage";
import { useNotify } from "src/components/SnackbarAlert";
import { Api } from "src/api/api";
import { ROUTES } from "src/routing/routes";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const notify = useNotify();
  const navigate = useNavigate();

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

        navigate(ROUTES.dashboard);
      },
      onError: (error) => {
        notify("error", "Invalid credentials");
      },
    }
  );

  return mutation;
};
