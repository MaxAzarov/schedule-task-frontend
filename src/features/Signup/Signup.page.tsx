import { Outlet } from "react-router-dom";
import { UnauthorizedLayout } from "../../components/Layout";

export default function Signup() {
  return (
    <UnauthorizedLayout>
      <Outlet />
    </UnauthorizedLayout>
  );
}
