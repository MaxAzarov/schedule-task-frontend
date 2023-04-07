import { Sidebar } from "src/components/Sidebar/Sidebar.component";
import { Container } from "./GeneralLayout.styles";
import ProjectSelectionModal from "src/components/modals/ProjectSelection/ProjectSelectionModal.component";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <Container>
      <div>
        <Sidebar />
      </div>

      <ProjectSelectionModal />

      {children}
    </Container>
  );
}
