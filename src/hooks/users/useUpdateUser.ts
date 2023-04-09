import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";

import { useNotify } from "src/components/SnackbarAlert";
import {
  UpdateUserRequest,
  UpdateUserResponse,
} from "src/api/users/updateUser/apiTypes";

export const useUpdateUser = () => {
  const notify = useNotify();

  const mutation = useMutation<
    UpdateUserResponse,
    AxiosError<APIErrorResponse>,
    UpdateUserRequest
  >(
    (data: UpdateUserRequest) => {
      return Api.updateUser(data);
    },
    {
      onSuccess: async () => {
        notify("success", "User is successfully updated");
      },
      onError: (error) => {
        notify("error", "Can not update user");
      },
    }
  );

  return mutation;
};
