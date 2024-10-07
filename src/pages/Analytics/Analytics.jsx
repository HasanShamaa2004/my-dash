import React from "react";
import Chart from "react-apexcharts";
import { Container, Grid } from "@mui/material";

// بيانات المخططات اليومية لكل 6 أيام عمل
const data = [
  { name: "إحصائية 1", data: [10, 40, 25, 50, 70, 90], color: "#F44336" },
  { name: "إحصائية 2", data: [30, 60, 35, 80, 20, 55], color: "#2196F3" },
  { name: "إحصائية 3", data: [50, 70, 40, 60, 80, 100], color: "#FF9800" },
  { name: "إحصائية 4", data: [20, 50, 80, 30, 60, 90], color: "#4CAF50" },
  { name: "إحصائية 5", data: [60, 90, 20, 40, 70, 100], color: "#9C27B0" },
  { name: "إحصائية 6", data: [70, 40, 60, 80, 100, 50], color: "#00BCD4" },
];

// بيانات الإحصائية الكبيرة لـ 24 يوم
const largeChartData = {
  name: "إحصائية 24 يوم",
  data: [
    20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320,
    340, 360, 380, 400, 420, 440, 460, 480,
  ],
  color: "#FF5722",
};

const Analytics = () => {
  const renderCharts = () =>
    data.map((chart, index) => (
      <Grid item xs={12} md={4} key={index} className="p-4">
        <Chart
          options={{
            chart: {
              id: `chart-${index}`,
              type: "line",
              animations: {
                enabled: true,
                easing: "easeinout",
              },
              dropShadow: {
                enabled: true,
                top: 5,
                left: 5,
                bottom: 15,
                blur: 10,
                opacity: 0.2,
                color: chart.color,
              },
            },
            xaxis: {
              categories: [
                "Day 1",
                "Day 2",
                "Day 3",
                "Day 4",
                "Day 5",
                "Day 6",
              ],
            },
            colors: [chart.color],
            legend: {
              position: "top",
            },
            stroke: {
              curve: "smooth",
            },
          }}
          series={[
            {
              name: chart.name,
              data: chart.data,
            },
          ]}
          type="line"
          height="300"
        />
      </Grid>
    ));

  return (
    <Container>
      <h1 className="text-center font-bold text-2xl my-6">
        إحصائيات كل 6 أيام عمل
      </h1>
      <Grid container spacing={2}>
        {renderCharts()}
      </Grid>

      {/* المخطط العريض لإحصائية 24 يوم */}
      <h2 className="text-center font-bold text-2xl my-8">
        إحصائية العمل لـ 24 يوم
      </h2>
      <div className="w-full">
        <Chart
          options={{
            chart: {
              id: "large-chart",
              type: "area", // تغيير النوع إلى area
              animations: {
                enabled: true,
                easing: "easeinout",
              },
            },
            xaxis: {
              categories: Array.from({ length: 24 }, (_, i) => `Day ${i + 1}`),
            },
            colors: [largeChartData.color],
            legend: {
              position: "top",
            },
            stroke: {
              curve: "smooth",
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: [largeChartData.color],
                stops: [0, 100],
              },
            },
          }}
          series={[
            {
              name: largeChartData.name,
              data: largeChartData.data,
            },
          ]}
          type="area"
          height="400"
        />
      </div>
    </Container>
  );
};

export default Analytics;
