import { InputLabel, InputLabelProps } from "@mui/material";

function AppInputLabel({ children, ...props }: InputLabelProps) {
  return (
    <InputLabel
      sx={{
        lineHeight: "unset",
        color: "#194866",

        "&.MuiInputLabel-shrink": {
          color: props.error ? "#D80027" : "#194866CC ",
        },
      }}
      {...props}
    >
      {children}
    </InputLabel>
  );
}

export default AppInputLabel;
