import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

import { HttpStatusCode } from "src/api/httpStatusCodes";
import { useCurrentUser } from "src/hooks/auth/useCurrentUser";
import { ROUTES } from "../routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const { error, isLoading } = useCurrentUser();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    if (error?.response?.data.statusCode === HttpStatusCode.Unauthorized) {
      return <Navigate to={ROUTES.login} />;
    }

    console.error(`[useCurrentUser] Error: ${error}`);
    return (
      <Typography>Internal server error. Please, refresh the page</Typography>
    );
  }

  return <>{children}</>;
}
