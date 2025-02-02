import React from "react";
import "../components/component_CSS/graph.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const barGraphData = [
  { month: "Jan", actual: 17, projection: 5 },
  { month: "Feb", actual: 21, projection: 4 },
  { month: "Mar", actual: 18, projection: 5 },
  { month: "Apr", actual: 23, projection: 5 },
  { month: "May", actual: 16, projection: 3 },
  { month: "Jun", actual: 21, projection: 3 },
];

export const BarGraph = () => {
  function formatYAxis(value) {
    return value == 0 ? value : value + "M";
  }
  return (
    <ResponsiveContainer
      width="100%"
      height={160}
      className="smallText"
      style={{ marginLeft: "-2em" }}
    >
      <BarChart data={barGraphData} borderRadius={10}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="month" tickLine={false} stroke="#1C1C1C66" />
        <YAxis
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
          tickFormatter={formatYAxis}
          stroke="#1C1C1C66"
        />
        <Tooltip />
        <Bar dataKey="actual" barSize={20} fill="#A8C5DA" stackId="a" />
        <Bar
          dataKey="projection"
          fill="#cfdfeb"
          stackId="a"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const revenueData = [
  { month: "Jan", current: 15, previous: 10 },
  { month: "Feb", current: 11, previous: 17 },
  { month: "Mar", current: 14, previous: 15 },
  { month: "Apr", current: 16, previous: 11 },
  { month: "May", current: 17, previous: 16 },
  { month: "Jun", current: 16, previous: 18 },
];

export const RevenueGraph = () => {
  function formatYAxis(value) {
    return value == 0 ? value : value + "M";
  }
  return (
    <ResponsiveContainer width={580} height={232}>
      <LineChart data={revenueData}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="month" tickLine={false} stroke="#1C1C1C66" />
        <YAxis
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
          tickFormatter={formatYAxis}
          stroke="#1C1C1C66"
        />
        <Tooltip />
        <Line type="monotone" dataKey="current" stroke="#000" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="previous"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const TopSellingProducts = () => {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <>
      <h2 className="graph-title">Top Selling Products</h2>
      <table className="table-style">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Price</th>
            <th className="table-header">Quantity</th>
            <th className="table-header">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="table-data">{product.name}</td>
              <td className="table-data">{product.price}</td>
              <td className="table-data">{product.quantity}</td>
              <td className="table-data">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
