import { Outlet } from "react-router-dom";
import { UnauthorizedLayout } from "../../components/Layout";

export default function Login() {
  return (
    <UnauthorizedLayout>
      <Outlet />
    </UnauthorizedLayout>
  );
}
