import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const MenuListItem = ({ keyIndex, icon, label }) => (
  <ListItemButton
    sx={{
      bgcolor: keyIndex === "transaction" ? "mtSec.main" : "inherit",
    }}
  >
    <ListItemIcon
      sx={{
        color: keyIndex === "transaction" ? "secondary.main" : "grey",
      }}
    >
      {icon}
    </ListItemIcon>
    <ListItemText
      primaryTypographyProps={{
        color: keyIndex === "transaction" ? "secondary" : "inherit",
      }}
      primary={label}
    />
  </ListItemButton>
);

export default MenuListItem;
