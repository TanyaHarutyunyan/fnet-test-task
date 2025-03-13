import { TextField, TextFieldProps } from "@mui/material";

function AppTextField(props: TextFieldProps) {
  return (
    <TextField
      variant="outlined"
      InputLabelProps={{
        style: {
          color: props.error ? "#D80027" : "#194866CC",
          lineHeight: "unset",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: 0,

          "& fieldset": {
            border: "none",
          },

          "& .MuiOutlinedInput-input": {
            padding: 0,
            height: "48px",
            paddingInline: "10px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#194866",

            "&::placeholder": {
              color: props.error ? "#D80027" : "#194866",
            },
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: `0.5px solid ${props.error ? "#D80027" : "#194866CC"} !important`,
            borderRadius: "10px",
          },
        },
      }}
      {...props}
    />
  );
}

export default AppTextField;
