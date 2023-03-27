import { Grid, Box } from "@mui/material";
import LineCharts from "../../shared/charts/line-charts";

const AccountBankDetails = () => {
  return (
    <Grid
      sx={{ height: "100%" }}
      container
      spacing={2}
      columns={{ xs: 12, md: 10, lg: 12 }}
    >
      <Grid item xs={12} md={6} lg={7}>
        <Box height="40%" mb={1}>
          <LineCharts></LineCharts>
        </Box>
        <Box height="60%" backgroundColor="red"></Box>
      </Grid>
    </Grid>
  );
};
export default AccountBankDetails;
