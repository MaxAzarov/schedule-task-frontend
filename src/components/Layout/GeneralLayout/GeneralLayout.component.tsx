import { Sidebar } from "src/components/Sidebar/Sidebar.component";
import { Container } from "./GeneralLayout.styles";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <Container>
      <div>
        <Sidebar />
      </div>

      {children}
    </Container>
  );
}
