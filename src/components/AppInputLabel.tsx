import { InputLabel, InputLabelProps } from "@mui/material";

function AppInputLabel({children, ...props}: InputLabelProps) {
  return (
    <InputLabel
      sx={{
        lineHeight: "unset",
        color: "#194866",

        "&.MuiInputLabel-shrink": {
          color: "#194866CC ",
        },
      }}
      {...props}
    >
      {children}
    </InputLabel>
  );
}

export default AppInputLabel;
