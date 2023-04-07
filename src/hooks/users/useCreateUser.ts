import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";
import {
  CreateUserRequest,
  CreateUserResponse,
} from "src/api/users/createUser/apiTypes";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/routing/routes";
import { useNotify } from "src/components/SnackbarAlert";

export const useCreateUser = () => {
  const navigate = useNavigate();
  const notify = useNotify();

  const mutation = useMutation<
    CreateUserResponse,
    AxiosError<APIErrorResponse>,
    CreateUserRequest
  >(
    (data: CreateUserRequest) => {
      return Api.createUser(data);
    },
    {
      onSuccess: async () => {
        navigate(ROUTES.login);
      },
      onError: (error) => {
        notify("error", "Can not sign up a new user");
      },
    }
  );

  return mutation;
};
