import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";

import { useNotify } from "src/components/SnackbarAlert";
import { cacheKeys } from "./integrations.cacheKeys";
import {
  MarkEventAsDoneRequest,
  MarkEventAsDoneResponse,
} from "src/api/integrations/markEventAsDone/apiTypes";

export const useMarkEventAsDone = () => {
  const notify = useNotify();
  const queryclient = useQueryClient();

  const mutation = useMutation<
    MarkEventAsDoneResponse,
    AxiosError<APIErrorResponse>,
    MarkEventAsDoneRequest
  >(
    async (data: MarkEventAsDoneRequest) => {
      return await Api.markEventAsDone(data);
    },
    {
      onSuccess: async () => {
        queryclient.invalidateQueries(cacheKeys.getEvents());
        notify("success", "Event was successfully marked as done");
      },
      onError: (error) => {
        notify("error", "Event wasn't successfully marked as done");
      },
    }
  );

  return mutation;
};
