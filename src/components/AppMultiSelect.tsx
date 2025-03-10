import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";

function AppMultiSelect({ children, label, ...props }: SelectProps) {
  return (
    <Select
      labelId="checkbox-label"
      multiple
      input={<OutlinedInput label={label} />}
      renderValue={(selected: any) => selected.join(", ")}
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: "10px",
            border: "0.2px solid #19486680",
            marginTop: "2px",
            left: "0 !important",
          },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "0.5px solid #194866CC !important",
          borderRadius: "10px",
        },

        "& .MuiOutlinedInput-notchedOutline legend": {
          color: "red !important",
        },

        "& .MuiSelect-select": {
          height: "48px !important",
          paddingBlock: "0px",
          display: "flex",
          alignItems: "center",
        },
      }}
      {...props}
    >
      {children}
    </Select>
  );
}

export default AppMultiSelect;
