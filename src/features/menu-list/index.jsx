import React from "react";
import { List, styled } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuListItem from "./menu-list-item";

const MenuconstList = [
  {
    label: "Dashboard",
    keyIndex: "dashboard",
    icon: <GridViewRoundedIcon />,
  },
  { label: "Accounts", key: "accounts", icon: <AccountBalanceRoundedIcon /> },
  {
    label: "Transaction",
    keyIndex: "transaction",
    icon: <CurrencyExchangeRoundedIcon />,
  },
  { label: "Saving Goals", keyIndex: "goals", icon: <SavingsIcon /> },
  { label: "Budget", keyIndex: "budget", icon: <AccountBalanceWalletIcon /> },
];

const ListStyled = styled(List)({
  "& .MuiListItemButton-root": {
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 5,
  },
  // "& .MuiListItemButton-root:hover": {
  //   backgroundColor: "blue",
  // },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});

const MenuList = () => {
  return (
    <ListStyled component="nav">
      {MenuconstList.map((content) => (
        <MenuListItem key={content.keyIndex} {...content} />
      ))}
    </ListStyled>
  );
};

export default MenuList;
