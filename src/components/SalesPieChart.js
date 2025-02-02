import React, { useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "../components/component_CSS/SalesPieChart.css"; // Import CSS file

ChartJS.register(ArcElement, Tooltip);

const SalesPieChart = () => {
  const [hoveredData, setHoveredData] = useState(null);
  const chartRef = useRef(null);

  const salesData = [
    { label: "Direct", value: 300.56, color: "#000" },
    { label: "Affiliate", value: 135.18, color: "#8EC5FC" },
    { label: "Sponsored", value: 154.02, color: "#00A86B" },
    { label: "E-mail", value: 48.96, color: "#A569BD" },
  ];

  const data = {
    labels: salesData.map((item) => item.label),
    datasets: [
      {
        data: salesData.map((item) => item.value),
        backgroundColor: salesData.map((item) => item.color),
        hoverOffset: 10,
        borderWidth: 2,
        borderRadius: 15,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable default tooltip
        external: (context) => {
          const chart = chartRef.current;
          if (!chart) return;

          const tooltip = context.tooltip;
          if (tooltip.opacity === 0) {
            setHoveredData(null);
            return;
          }

          const index = tooltip.dataPoints?.[0]?.dataIndex;
          if (index !== undefined) {
            const { x, y } = tooltip.caretX
              ? { x: tooltip.caretX, y: tooltip.caretY }
              : { x: 150, y: 150 };

            setHoveredData({
              label: salesData[index].label,
              value: salesData[index].value,
              x,
              y,
            });
          }
        },
      },
    },
  };

  return (
    <div className="sales-chart-wrapper">
      <h2 className="graph-title">Total Sales</h2>
      {/* Pie Chart Section */}
      <div className="sales-chart-container">
        <Doughnut ref={chartRef} data={data} options={options} />

        {hoveredData && (
          <div
            className="chart-tooltip"
            style={{
              top: hoveredData.y - 10,
              left: hoveredData.x + 10,
            }}
          >
            <span className="category">{hoveredData.label}</span>
            <span className="amount">${hoveredData.value.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Below Pie Chart Section */}
      <div className="belowpiechart">
        {salesData.map((item, index) => (
          <div key={index} className="sales-data-row">
            <span
              className="sales-dot"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="sales-label">{item.label}</span>
            <span className="sales-amount">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPieChart;
