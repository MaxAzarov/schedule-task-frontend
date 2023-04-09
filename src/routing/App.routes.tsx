import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { UserProfileRoutes } from "../features/UserProfile/UserProfile.routes";
import { LoginRoutes } from "src/features/Login/Login.routes";
import { SignupRoutes } from "src/features/Signup/Signup.routes";
import { DashboardRoutes } from "src/features/Dashboard/Dashboard.routes";
import { ProtectedRoute } from "./guards/ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTES.profile}
        element={
          <ProtectedRoute>
            <UserProfileRoutes />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.login} element={<LoginRoutes />} />
      <Route path={ROUTES.signup} element={<SignupRoutes />} />
      <Route
        path={ROUTES.dashboard}
        element={
          <ProtectedRoute>
            <DashboardRoutes />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to={ROUTES.login} />} />
    </Routes>
  );
}
