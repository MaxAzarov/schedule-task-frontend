import { EventType } from "src/api/commonTypes";

export const cacheKeys = {
  getIntegration: (type: EventType) => ["getIntegration", type],
  getEvents: () => ["getEvents"],
};
