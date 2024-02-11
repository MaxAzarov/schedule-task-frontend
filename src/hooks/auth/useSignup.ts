import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { useNotify } from "src/components/SnackbarAlert";
import { Api } from "src/api/api";
import { ROUTES } from "src/routing/routes";
import { SignupRequest, SignupResponse } from "src/api/auth/signUp/apiTypes";

export const useSignup = () => {
  const notify = useNotify();
  const navigate = useNavigate();

  const mutation = useMutation<
    SignupResponse,
    AxiosError<APIErrorResponse>,
    SignupRequest
  >(
    (data: SignupRequest) => {
      return Api.signup(data);
    },
    {
      onSuccess: async () => {
        navigate(ROUTES.login);
      },
      onError: (error) => {
        notify("error", "Invalid credentials");
      },
    }
  );

  return mutation;
};
