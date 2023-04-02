import { Outlet } from "react-router-dom";
import { GeneralLayout } from "../../components/Layout";

export default function UserProfile() {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  );
}
