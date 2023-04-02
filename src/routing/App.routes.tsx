import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { UserProfileRoutes } from "../features/UserProfile/UserProfile.routes";

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route path={ROUTES.dashboard} element={<DashboardScreen />}></Route>
      <Route path={ROUTES.login} element={<DashboardScreen />}></Route> */}
      <Route path={ROUTES.profile} element={<UserProfileRoutes />}></Route>
    </Routes>
  );
}
