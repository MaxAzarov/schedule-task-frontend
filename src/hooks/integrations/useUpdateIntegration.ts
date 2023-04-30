import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";

import { useNotify } from "src/components/SnackbarAlert";
import { cacheKeys } from "./integrations.cacheKeys";
import {
  UpdateIntegrationRequest,
  UpdateIntegrationResponse,
} from "src/api/integrations/updateIntegration/apiTypes";

export const useUpdateIntegration = () => {
  const notify = useNotify();
  const queryclient = useQueryClient();

  const mutation = useMutation<
    UpdateIntegrationResponse,
    AxiosError<APIErrorResponse>,
    UpdateIntegrationRequest
  >(
    async (data: UpdateIntegrationRequest) => {
      const response = await Api.updateIntegration(data);

      queryclient.invalidateQueries(cacheKeys.getIntegration(data.type));

      return response;
    },
    {
      onSuccess: async (data) => {
        notify("success", "Integration is updated");
      },
      onError: (error) => {
        notify("error", "Integration is not updated");
      },
    }
  );

  return mutation;
};
