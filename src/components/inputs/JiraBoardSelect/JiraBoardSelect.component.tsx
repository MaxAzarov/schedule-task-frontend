import { ChangeEventHandler } from "react";
import { MenuItem, StandardTextFieldProps, TextField } from "@mui/material";
import { JiraProject } from "src/api/commonTypes/jiraBoards.types";

interface JiraBoardSelectProps
  extends Omit<StandardTextFieldProps, "onChange"> {
  boards: JiraProject[];
  value?: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function JiraBoardSelect({
  boards,
  value,
  handleChange,
  ...props
}: JiraBoardSelectProps) {
  return (
    <TextField
      select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ width: 180, m: 0 }}
      {...props}
    >
      {boards?.map((board) => (
        <MenuItem key={board.name} value={board.id}>
          {board.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
