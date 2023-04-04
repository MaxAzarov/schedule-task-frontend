import { Copyright } from "src/components/copyright";

interface UnauthorizedLayoutProps {
  children: React.ReactNode;
}

export function UnauthorizedLayout({ children }: UnauthorizedLayoutProps) {
  return (
    <>
      {children}
      <Copyright />
    </>
  );
}
