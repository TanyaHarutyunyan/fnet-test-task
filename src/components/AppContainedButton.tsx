import { Button, ButtonProps } from "@mui/material";

function AppContainedButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "10px",
        height: "48px",
        width: "96px",
        backgroundColor: "#34C88A",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#2DAE79",
        },
      }}
      {...props}
    />
  );
}

export default AppContainedButton;
