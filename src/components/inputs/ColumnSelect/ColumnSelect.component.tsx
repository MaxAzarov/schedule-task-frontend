import { MenuItem, TextField, StandardTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { JiraProjectStatus } from "src/api/commonTypes/jiraColumns.types";
import { BoardList } from "src/api/commonTypes/trelloColumns.types";

interface ColumnsSelectProps extends Omit<StandardTextFieldProps, "onChange"> {
  columns: BoardList[] | JiraProjectStatus[];
  value?: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

function ColumnSelect({
  columns,
  value,
  handleChange,
  ...props
}: ColumnsSelectProps) {
  return (
    <TextField
      select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ width: 180, m: 0 }}
      {...props}
    >
      {columns?.map((column) => (
        <MenuItem key={column.name} value={column.id}>
          {column.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default ColumnSelect;
