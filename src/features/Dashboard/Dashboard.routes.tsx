import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.page";
import { DashboardScreen } from "./DashboardScreen";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardScreen />} />
      </Route>
    </Routes>
  );
}
