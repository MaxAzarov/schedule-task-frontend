import { Config } from "src/config";
import { appStorage } from "src/services/appStorage";

export async function getTrelloRedirectUrl() {
  const token = await appStorage.getApiToken();

  return `${Config.API_BASE_URL}/trello/auth?token=${token}`;
}
