import { Outlet } from "react-router-dom";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div>
      GeneralLayout.component
      {children}
    </div>
  );
}
