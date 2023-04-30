import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Api } from "src/api/api";
import { APIErrorResponse } from "src/api/commonTypes/api";
import {
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
} from "src/api/integrations/deleteIntegration/apiTypes";
import { useNotify } from "src/components/SnackbarAlert";
import { cacheKeys } from "./integrations.cacheKeys";

export const useDeleteIntegration = () => {
  const notify = useNotify();
  const queryclient = useQueryClient();

  const mutation = useMutation<
    DeleteIntegrationResponse,
    AxiosError<APIErrorResponse>,
    DeleteIntegrationRequest
  >(
    async (data) => {
      const response = await Api.deleteIntegration(data);

      queryclient.invalidateQueries(cacheKeys.getIntegration(data.type));

      return response;
    },
    {
      onSuccess: async () => {
        notify("success", "Integration is successfully deleted");
      },
      onError: async (err) => {
        notify(
          "error",
          `Failed to delete integration: ${
            err.response?.data.message || err.message
          }`
        );
      },
    }
  );

  return mutation;
};
