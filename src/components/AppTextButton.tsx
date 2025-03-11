import { Button, ButtonProps } from "@mui/material";

function AppTextButton(props: ButtonProps) {
  return (
    <Button
      variant="text"
      sx={{
        borderRadius: "10px",
        textTransform: "none",
        color: "#34C88A",
        textDecoration: "underline",

        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      {...props}
    />
  );
}

export default AppTextButton;
