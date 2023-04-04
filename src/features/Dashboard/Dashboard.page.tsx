import { Outlet } from "react-router-dom";
import { GeneralLayout } from "../../components/Layout";

export default function Dashboard() {
  return (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  );
}
