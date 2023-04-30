import { IntegrationType } from "src/api/commonTypes";

export const cacheKeys = {
  getIntegration: (type: IntegrationType) => ["getIntegration", type],
  getEvents: () => ["getEvents"],
};
