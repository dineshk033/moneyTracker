import ReactEcharts from "echarts-for-react";
import formatShortNumbers from "../utils/formatShortNumbers";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import DropdownComp from "../input/dropdown";
const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Suns"],
    show: false,
  },
  yAxis: {
    type: "value",
    show: false,
  },
  grid: {
    top: "0",
    bottom: 0,
    left: "5%",
    right: "5%",
  },
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      var value = formatShortNumbers(params[0].value);
      // console.log(value);
      // alert(value);
      return params[0].name + ": " + value;
    },
    axisPointer: {
      lineStyle: {
        opacity: 0,
      },
    },
  },
  series: [
    {
      data: [102000, 90032, 90001, 93400, 100290, 133000, 100320],
      type: "line",
      smooth: true,
      label: {
        show: false,
      },
    },
    {
      data: [98223, 85520, 65540, 86455, 98764, 110000, 99442],
      type: "line",
      smooth: true,
      label: {
        show: false,
      },
    },
    // {
    //   data: [40000, 60000, 30000, 40000, 35000, 40000, 51423],
    //   type: "line",
    //   smooth: true,
    //   label: {
    //     show: false,
    //   },
    // },
  ],
};

const LineCharts = () => {
  return (
    <Card variant="outlined" sx={{ boxSizing: "border-box", height: "100%" }}>
      <CardHeader
        subheader={
          <Box>
            Income & Expenses
            <DropdownComp />
          </Box>
        }
      />
      <ReactEcharts
        option={option}
        style={{ height: "calc(100% - 60px)" }}
      ></ReactEcharts>
    </Card>
  );
};

export default LineCharts;
