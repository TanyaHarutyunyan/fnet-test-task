import { TextField, TextFieldProps } from "@mui/material";

function AppTextFiled(props: TextFieldProps) {
  return (
    <TextField
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          border: "0.5px solid #194866CC",
          borderRadius: "10px",
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
              color: "#194866",
            },
          },
        },
      }}
      {...props}
    />
  );
}

export default AppTextFiled;
