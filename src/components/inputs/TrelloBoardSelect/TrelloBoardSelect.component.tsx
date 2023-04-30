import { MenuItem, StandardTextFieldProps, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";
import { TrelloBoard } from "src/api/commonTypes/trelloBoards.types";

interface TrelloBoardSelectProps
  extends Omit<StandardTextFieldProps, "onChange"> {
  boards: TrelloBoard[];
  value?: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function TrelloBoardSelect({
  boards,
  value,
  handleChange,
}: TrelloBoardSelectProps) {
  return (
    <TextField
      select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ width: 180, m: 0 }}
    >
      {boards?.map((board) => (
        <MenuItem key={board.name} value={board.id}>
          {board.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
