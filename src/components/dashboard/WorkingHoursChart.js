import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  FilterContainer,
  FilterButton,
  CardHeader,
  Card,
  CardTitle,
} from "../styled/StatCard.styles";

const WorkingHours = () => {
  const [timeFilter, setTimeFilter] = useState("thisMonth");

  const chartData = {
    thisMonth: {
      data: [12.2, 10.8, 5.4, 8.9, 1.4],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    lastMonth: {
      data: [10.5, 9.8, 8.4, 7.9, 6.4],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    lastWeek: {
      data: [11.2, 9.8, 8.4, 7.9, 5.4],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  };

  const options = {
    chart: {
      type: "spline",
      height: 300,
      style: {
        fontFamily: "inherit",
      },
    },
    title: {
      text: "Daily Average Working Hours",
      style: {
        fontSize: "16px",
        fontWeight: "500",
      },
    },
    xAxis: {
      categories: chartData[timeFilter].categories,
      labels: {
        style: {
          color: "#666",
        },
      },
    },
    yAxis: {
      title: {
        text: "Hours",
        style: {
          color: "#666",
        },
      },
      min: 0,
      max: 14,
      gridLineColor: "#f0f0f0",
    },
    series: [
      {
        name: "Working Hours",
        data: chartData[timeFilter].data,
        color: "#4C6FFF",
        marker: {
          enabled: true,
          radius: 4,
        },
      },
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#fff",
      borderColor: "#f0f0f0",
      borderRadius: 8,
      padding: 12,
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Average Working Hours</CardTitle>
        <FilterContainer>
          <FilterButton
            active={timeFilter === "thisMonth"}
            onClick={() => setTimeFilter("thisMonth")}
          >
            This Month
          </FilterButton>
          <FilterButton
            active={timeFilter === "lastMonth"}
            onClick={() => setTimeFilter("lastMonth")}
          >
            Last Month
          </FilterButton>
          <FilterButton
            active={timeFilter === "lastWeek"}
            onClick={() => setTimeFilter("lastWeek")}
          >
            Last Week
          </FilterButton>
        </FilterContainer>
      </CardHeader>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
};

export default WorkingHours;
