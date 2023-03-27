import { Box, Card, CardHeader } from "@mui/material";
import PieChart from "../../shared/charts/pie-charts";
import DropDownComp from "../../shared/input/dropdown";

const PieChartCard = () => {
  return (
    <Card variant="outlined" sx={{ boxSizing: "border-box", height: "275px" }}>
      <CardHeader
        subheader={
          <Box
            display="flex"
            zIndex={99}
            justifyContent="space-between"
            alignItems="center"
          >
            Expense Overview
            <DropDownComp />
          </Box>
        }
      />
      <PieChart />
    </Card>
  );
};

export default PieChartCard;
