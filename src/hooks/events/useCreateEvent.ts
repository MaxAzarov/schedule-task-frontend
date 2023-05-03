import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

import { APIErrorResponse } from "src/api/commonTypes/api";
import { Api } from "src/api/api";

import { useNotify } from "src/components/SnackbarAlert";
import {
  CreateEventRequest,
  CreateEventResponse,
} from "src/api/events/createEvent/apiTypes";
import { cacheKeys } from "../integrations/integrations.cacheKeys";

export const useCreateEvent = () => {
  const notify = useNotify();
  const queryclient = useQueryClient();

  const mutation = useMutation<
    CreateEventResponse,
    AxiosError<APIErrorResponse>,
    CreateEventRequest
  >(
    (data: CreateEventRequest) => {
      return Api.createEvent(data);
    },
    {
      onSuccess: async () => {
        queryclient.invalidateQueries(cacheKeys.getEvents());
        notify("success", "New Event is added");
      },
      onError: () => {
        notify("error", "Can not create a new event");
      },
    }
  );

  return mutation;
};
