import ReactEcharts from "echarts-for-react";

const OPTION = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  grid: {
    top: 0,
    left: 0,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      selectedMode: "single",
      radius: [0, "30%"],
      label: {
        position: "inner",
        fontSize: 14,
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1548, name: "Search Engine" },
        { value: 775, name: "Direct" },
        { value: 679, name: "Marketing" },
      ],
    },
    {
      name: "Access From",
      type: "pie",
      radius: ["45%", "60%"],
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [
        { value: 1048, name: "Baidu" },
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 251, name: "Google" },
        { value: 234, name: "Union Ads" },
        { value: 147, name: "Bing" },
        { value: 135, name: "Video Ads" },
        { value: 102, name: "Others" },
      ],
    },
  ],
};
const PieChart = () => {
  return (
    <ReactEcharts
      option={OPTION}
      style={{ height: "100%", marginTop: "-12%" }}
    ></ReactEcharts>
  );
};
export default PieChart;
