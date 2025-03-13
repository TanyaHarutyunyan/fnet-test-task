import { Button, ButtonProps } from "@mui/material";

function AppTextButton({ sx, ...props }: ButtonProps) {
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

        ...sx,
      }}
      {...props}
    />
  );
}

export default AppTextButton;
