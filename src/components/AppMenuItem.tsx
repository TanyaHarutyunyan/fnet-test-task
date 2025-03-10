import { MenuItem, MenuItemProps } from "@mui/material";

function AppMenuItem({ children, ...props }: MenuItemProps) {
  return (
    <MenuItem
      sx={{
        color: "#194866",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          fontWeight: 600,
        },

        "&.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: "transparent !important",
        },

        "&.MuiMenuItem-root": {
          backgroundColor: "transparent",
        },
      }}
      {...props}
    >
      {children}
    </MenuItem>
  );
}

export default AppMenuItem;
