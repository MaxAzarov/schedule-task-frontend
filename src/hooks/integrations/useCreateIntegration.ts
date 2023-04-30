import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";

import { useNotify } from "src/components/SnackbarAlert";
import {
  CreateIntegrationRequest,
  CreateIntegrationResponse,
} from "src/api/integrations/createIntegration/apiTypes";
import { cacheKeys } from "./integrations.cacheKeys";

export const useCreateIntegration = () => {
  const notify = useNotify();
  const queryclient = useQueryClient();

  const mutation = useMutation<
    CreateIntegrationResponse,
    AxiosError<APIErrorResponse>,
    CreateIntegrationRequest
  >(
    (data: CreateIntegrationRequest) => {
      return Api.createIntegration(data);
    },
    {
      onSuccess: async (data) => {
        queryclient.invalidateQueries(cacheKeys.getIntegration(data.type));
        notify("success", "New integration is added");
      },
      onError: (error) => {
        notify("error", "Can not create a new integration");
      },
    }
  );

  return mutation;
};
