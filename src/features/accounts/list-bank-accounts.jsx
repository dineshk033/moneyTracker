import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ListStyled = styled(List)(({ theme }) => ({
  "& .MuiListItemButton-root": {
    padding: "4px 0",
  },
  "& .MuiListItemButton-root.Mui-selected": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
  "& .MuiListItemButton-root.Mui-selected:hover": {
    backgroundColor: "transparent",
    // color: theme.palette.primary.main,
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "transparent",
    color: theme.palette.mtPrimary.main,
  },
  "& .MuiListItemButton-root.Mui-selected .MuiListItemText-root .MuiTypography-root":
    {
      fontWeight: "bold",
    },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 12,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
  },
}));

const ListBankAccounts = () => {
  return (
    <ListStyled>
      <ListItemButton disableGutters>
        <ListItemText
          primaryTypographyProps={{ fontSize: "0.9rem" }}
          primary="Overview"
          secondary="Balance: 5000Rs."
        />
      </ListItemButton>
      <ListItemButton disableGutters>
        <ListItemText
          primaryTypographyProps={{ fontSize: "0.9rem" }}
          primary="ICICI Bank"
          secondary="Balance: 5000Rs."
        />
      </ListItemButton>
      <ListItemButton selected disableGutters>
        <ListItemText
          primary="IDBI Bank"
          primaryTypographyProps={{ fontSize: "0.9rem" }}
          secondary="Balance: 5000Rs."
        />
        <ListItemIcon edge="end">
          <KeyboardArrowRightIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton disableGutters>
        <ListItemText
          primaryTypographyProps={{ fontSize: "0.9rem" }}
          primary="DBS Bank"
          secondary="Balance: 5000Rs."
        />
      </ListItemButton>
    </ListStyled>
  );
};

export default ListBankAccounts;
