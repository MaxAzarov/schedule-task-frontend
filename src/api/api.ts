import { appStorage } from "src/services/appStorage";
import { createAxiosInstance, GetApiFunc } from "./base";
import { Config } from "src/config";
import { createAuthApi } from "./auth/authApi";

function createApi(getAxiosInstance: GetApiFunc) {
  return {
    ...createAuthApi(getAxiosInstance),
  };
}

export const Api = createApi(async () => {
  const tokenFromUrl = new URLSearchParams(window.location.search).get("token");
  const apiToken = tokenFromUrl || (await appStorage.getApiToken()) || "";
  const baseURL = `${Config.API_BASE_URL}`;

  return createAxiosInstance({ apiToken, baseURL });
});
