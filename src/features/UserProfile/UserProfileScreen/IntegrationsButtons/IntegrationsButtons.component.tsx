import { Box } from "@mui/material";

import JiraIntegration from "../JiraIntegration/JiraIntegration.component";
import TrelloIntegration from "../TrelloIntegration/TrelloIntegration.component";

function IntegrationsButtons() {
  return (
    <Box display="flex" flexDirection="column" columnGap={10}>
      <JiraIntegration />
      <TrelloIntegration />
    </Box>
  );
}

export default IntegrationsButtons;
