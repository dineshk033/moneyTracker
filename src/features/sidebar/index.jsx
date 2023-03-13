import { Paper } from "@mui/material";
import LogoComponent from "../../shared/logo/logo";
import MenuList from "../menu-list";

const SideBar = () => {
  return (
    <Paper elevation={0} sx={{ padding: { xs: 1, md: 3, lg: 4 } }}>
      <LogoComponent />
      <MenuList />
    </Paper>
  );
};

export default SideBar;
