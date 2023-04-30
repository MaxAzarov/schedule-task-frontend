import { getIntegration } from "./getIntegration/getIntegration";
import { GetApiFunc, makeEndpoint } from "../base";

import { createIntegration } from "./createIntegration/createIntegration";
import { deleteIntegration } from "./deleteIntegration/deleteIntegration";
import { updateIntegration } from "./updateIntegration/updateIntegration";
import { getIntegrationsEvents } from "./getEvents/getEvents";

export function createIntegrationsApi(getApi: GetApiFunc) {
  return {
    createIntegration: makeEndpoint(createIntegration, getApi),
    getIntegration: makeEndpoint(getIntegration, getApi),
    deleteIntegration: makeEndpoint(deleteIntegration, getApi),
    updateIntegration: makeEndpoint(updateIntegration, getApi),
    getIntegrationsEvents: makeEndpoint(getIntegrationsEvents, getApi),
  };
}
