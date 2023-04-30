import { useCallback } from "react";

import { appStorage } from "src/services/appStorage";

import { ROUTES } from "src/routing/routes";
import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  const navigate = useNavigate();

  const signout = useCallback(async () => {
    await appStorage.removeApiToken();
    navigate(ROUTES.login);
  }, [navigate]);

  return { signout };
};
