import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { UserProfileRoutes } from "../features/UserProfile/UserProfile.routes";
import { LoginRoutes } from "src/features/Login/Login.routes";
import { SignupRoutes } from "src/features/Signup/Signup.routes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.profile} element={<UserProfileRoutes />} />
      <Route path={ROUTES.login} element={<LoginRoutes />} />
      <Route path={ROUTES.signup} element={<SignupRoutes />} />
    </Routes>
  );
}
