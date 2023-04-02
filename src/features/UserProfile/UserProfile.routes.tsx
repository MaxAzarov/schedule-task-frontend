import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile.page";
import { UserProfileScreen } from "./UserProfileScreen";

export function UserProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserProfile />}>
        <Route index element={<UserProfileScreen />} />
      </Route>
    </Routes>
  );
}
