import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../features/sidebar";
import UserInfo from "../features/user-info";

const LayoutPage = () => {
  return (
    <Grid
      container
      style={{ height: "calc(100vh + 16px)" }}
      spacing={{ xs: 1, sm: 1.5, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 10 }}
    >
      <Grid
        sx={{ bgcolor: "mtGrey.main" }}
        style={{ flexGrow: 1 }}
        item
        xs={1}
        sm={2}
        md={2}
      >
        <SideBar />
      </Grid>
      <Grid item xs={3} sm={6} md={8}>
        <Box paddingX={{ xs: 2, md: 4 }} paddingTop={{ xs: 2, md: 4 }}>
          <UserInfo />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LayoutPage;
