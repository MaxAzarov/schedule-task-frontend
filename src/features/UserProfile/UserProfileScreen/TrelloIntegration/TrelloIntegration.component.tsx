import { useCallback, ChangeEvent } from "react";
import { Box, Typography, Button } from "@mui/material";
import { EventType } from "src/api/commonTypes";
import { useSingleIntegration } from "src/hooks/integrations/useSingleIntegration";
import { useTrelloBoards } from "src/hooks/trelloIntegrations/useTrelloBoards";
import { CheckGreenCircleIcon } from "src/components/Icons";
import { getTrelloRedirectUrl } from "src/helpers/trello";
import TrelloBoardSelect from "src/components/inputs/TrelloBoardSelect/TrelloBoardSelect.component";
import { useDeleteIntegration } from "src/hooks/integrations/useDeleteIntegration";
import ColumnSelect from "src/components/inputs/ColumnSelect/ColumnSelect.component";
import { useUpdateIntegration } from "src/hooks/integrations/useUpdateIntegration";
import { ConnectButton } from "src/components/buttons";
import { useTrelloColumns } from "src/hooks/trelloIntegrations/useTrelloColumns";

export default function TrelloIntegration() {
  const { integration: trelloIntegration } = useSingleIntegration({
    type: EventType.trello,
  });

  const { boards } = useTrelloBoards({}, { enabled: !!trelloIntegration });
  const { mutate: updateIntegration } = useUpdateIntegration();
  const { mutate: deleteIntegration, isLoading } = useDeleteIntegration();
  const { columns } = useTrelloColumns(
    {},
    { enabled: !!trelloIntegration?.projectId }
  );

  const handleConnectTrello = useCallback(async () => {
    window.location.href = await getTrelloRedirectUrl();
  }, []);

  const handleDisconnectClick = useCallback(
    (id: number, type: EventType) => {
      deleteIntegration({ id, type });
    },
    [deleteIntegration]
  );

  const handleTrelloAccountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateIntegration({
        id: trelloIntegration?.id!,
        projectId: event.target.value,
        type: EventType.trello,
      });
    },
    [trelloIntegration?.id, updateIntegration]
  );

  const handleTrelloColumnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = event.target.name as "readyColumnId" | "todoColumnId";
      updateIntegration({
        id: trelloIntegration?.id!,
        type: EventType.trello,
        [name]: event.target.value,
      });
    },
    [trelloIntegration?.id, updateIntegration]
  );

  return (
    <Box sx={{ mt: "50px" }}>
      {trelloIntegration ? (
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
                  Trello connected
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() =>
                  handleDisconnectClick(
                    trelloIntegration.id,
                    trelloIntegration.type
                  )
                }
                disabled={isLoading}
                sx={{ ml: 4 }}
              >
                Disconnect
              </Button>
            </Box>

            {trelloIntegration.email && (
              <Typography variant="body2" sx={{ my: 10 }}>
                Connected email: {trelloIntegration.email}
              </Typography>
            )}

            {boards && (
              <TrelloBoardSelect
                label="Project"
                boards={boards}
                value={trelloIntegration.projectId}
                handleChange={handleTrelloAccountChange}
              />
            )}

            {columns && (
              <Box display="flex" gap={5} mt={4}>
                <ColumnSelect
                  label="TODO column"
                  columns={columns}
                  name="todoColumnId"
                  value={trelloIntegration.todoColumnId}
                  InputLabelProps={{ shrink: true }}
                  handleChange={handleTrelloColumnChange}
                />
                <ColumnSelect
                  label="Ready column"
                  name="readyColumnId"
                  InputLabelProps={{ shrink: true }}
                  columns={columns}
                  value={trelloIntegration.readyColumnId}
                  handleChange={handleTrelloColumnChange}
                />
              </Box>
            )}
          </Box>
        </>
      ) : (
        <>
          <ConnectButton
            onClick={handleConnectTrello}
            text="Connect Trello account"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            disabled={!!trelloIntegration}
          />
        </>
      )}
    </Box>
  );
}
