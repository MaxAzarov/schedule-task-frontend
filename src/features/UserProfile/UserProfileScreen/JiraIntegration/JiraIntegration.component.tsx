import { ChangeEvent, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import { EventType } from "src/api/commonTypes";
import { CheckGreenCircleIcon } from "src/components/Icons";
import { ConnectButton } from "src/components/buttons";
import JiraBoardSelect from "src/components/inputs/JiraBoardSelect/JiraBoardSelect.component";
import { getJiraRedirectUrl } from "src/helpers/jira";
import { useDeleteIntegration } from "src/hooks/integrations/useDeleteIntegration";
import { useSingleIntegration } from "src/hooks/integrations/useSingleIntegration";
import { useUpdateIntegration } from "src/hooks/integrations/useUpdateIntegration";
import { useJiraBoards } from "src/hooks/jiraIntegrations/useJiraBoards";
import { useJiraColumns } from "src/hooks/jiraIntegrations/useJiraColumns";
import ColumnSelect from "src/components/inputs/ColumnSelect/ColumnSelect.component";

export default function JiraIntegration() {
  const { integration: jiraIntegration } = useSingleIntegration({
    type: EventType.jira,
  });

  const { mutate: deleteIntegration, isLoading } = useDeleteIntegration();
  const { mutate: updateIntegration } = useUpdateIntegration();

  const { columns } = useJiraColumns(
    {},
    { enabled: !!jiraIntegration?.projectId }
  );

  const { boards: jiraBoards } = useJiraBoards(
    {},
    { enabled: !!jiraIntegration }
  );

  const handleConnectJira = useCallback(async () => {
    window.location.href = await getJiraRedirectUrl();
  }, []);

  const handleDisconnectClick = useCallback(
    (id: number, type: EventType) => {
      deleteIntegration({ id, type });
    },
    [deleteIntegration]
  );

  const handleJiraAccountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateIntegration({
        id: jiraIntegration?.id!,
        projectId: event.target.value,
        type: EventType.jira,
      });
    },
    [jiraIntegration?.id, updateIntegration]
  );

  const handleJiraColumnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = event.target.name as "readyColumnId" | "todoColumnId";
      updateIntegration({
        id: jiraIntegration?.id!,
        type: EventType.jira,
        [name]: event.target.value,
      });
    },
    [jiraIntegration?.id, updateIntegration]
  );

  return (
    <Box>
      {jiraIntegration ? (
        <>
          <Box>
            <Box display="flex" alignItems="center">
              <Box display="flex">
                <CheckGreenCircleIcon fontSize="small" />
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{ ml: 10 }}
                >
                  Jira connected
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() =>
                  handleDisconnectClick(
                    jiraIntegration.id,
                    jiraIntegration.type
                  )
                }
                disabled={isLoading}
                sx={{ ml: 4 }}
              >
                Disconnect
              </Button>
            </Box>

            <Typography variant="body2" sx={{ my: 10 }}>
              Connected email: {jiraIntegration.email}
            </Typography>

            {jiraBoards && (
              <JiraBoardSelect
                label="Project"
                boards={jiraBoards}
                value={jiraIntegration.projectId}
                handleChange={handleJiraAccountChange}
              />
            )}

            {columns && (
              <Box display="flex" gap={5} mt={4}>
                <ColumnSelect
                  label="TODO column"
                  columns={columns}
                  name="todoColumnId"
                  value={jiraIntegration.todoColumnId}
                  InputLabelProps={{ shrink: true }}
                  handleChange={handleJiraColumnChange}
                />
                <ColumnSelect
                  label="Ready column"
                  name="readyColumnId"
                  InputLabelProps={{ shrink: true }}
                  columns={columns}
                  value={jiraIntegration.readyColumnId}
                  handleChange={handleJiraColumnChange}
                />
              </Box>
            )}
          </Box>
        </>
      ) : (
        <>
          <ConnectButton
            onClick={handleConnectJira}
            text="Connect Jira account"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            disabled={!!jiraIntegration}
          />
        </>
      )}
    </Box>
  );
}
