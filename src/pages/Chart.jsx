import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 45, 60, 65, 70, 75, 80, 85, 90],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 3,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#666",
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#666",
          fontSize: "14px",
        },
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center"><h1>Complaints Over Time</h1></div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;