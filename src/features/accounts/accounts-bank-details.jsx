import { Grid, Box } from "@mui/material";
import LineCharts from "../../shared/charts/line-charts";
import PieChartCard from "./pie-chart-card";

const AccountBankDetails = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 12, md: 10, lg: 12 }}>
      <Grid item xs={12} md={7} lg={7}>
        {/* <Box height="100%" mb={1}> */}
        <LineCharts></LineCharts>
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <PieChartCard />
      </Grid>
    </Grid>
  );
};
export default AccountBankDetails;
