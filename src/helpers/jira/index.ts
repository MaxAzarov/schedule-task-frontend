import { Config } from "src/config";
import { appStorage } from "src/services/appStorage";

export async function getJiraRedirectUrl() {
  const token = await appStorage.getApiToken();

  return `${Config.API_BASE_URL}/jira/auth?token=${token}`;
}
