import { BarGraph, RevenueGraph, TopSellingProducts } from "./Graph";
import SalesPieChart from "./SalesPieChart";
import worldMap from "../attributes/images/WorldMap.png";
import { FaArrowTrendUp, FaArrowTrendDown, FaRegCircle } from "react-icons/fa6";
import "./component_CSS/main.css";

const cards = [
  {
    field: "Customers",
    number: "3,781",
    percentage: "+11.01",
    bgColor: "#E3F5FF",
  },
  { field: "Orders", number: "1,219", percentage: "-0.03", bgColor: "#F7F9FB" },
  {
    field: "Revenue",
    number: "$695",
    percentage: "+15.03",
    bgColor: "#F7F9FB",
  },
  { field: "Growth", number: "30.1%", percentage: "+6.08", bgColor: "#E5ECF6" },
];

const revenueByLocation = [
  { location: "New York", revenue: 72 },
  { location: "San Franciso", revenue: 39 },
  { location: "Sydney", revenue: 25 },
  { location: "Singapore", revenue: 61 },
];

export default function Main() {
  return (
    <main>
      <div className="main-container">
        <div className="row upperDivCss">
          <div className="left-section">
            <h2 className="section-title">eCommerce</h2>

            <div className="cards-container">
              {cards.map((c) => (
                <RevenueDetailsCards data={c} />
              ))}
            </div>
          </div>

          <div className="barGraph-container">
            <h2 className="heading">Projections vs Actuals</h2>
            <BarGraph />
          </div>
        </div>
        <div className="row">
          <div className="revenueGraph-container">
            <h2 className="revenue-header">
              Revenue
              <span style={{ color: "#1C1C1C33", padding: "0 20px 0 15px" }}>
                {"        |     "}
              </span>
              <span className="smallText dataSpan">
                <FaRegCircle className="circles" />
                Current Week <b> $58,211</b>
              </span>
              <span className="smallText">
                <FaRegCircle
                  className="circles"
                  style={{ paddingRight: "2px" }}
                />
                Previous Week <b> $68,768</b>
              </span>
            </h2>
            <RevenueGraph />
          </div>
          <div className="chart-container">
            <h2 className="graph-title">Revenue by Location</h2>
            <img src={worldMap}></img>
            {revenueByLocation.map((location) => {
              return (
                <div className="details-div">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{location.location}</span>
                    <span>{location.revenue}K</span>
                  </div>
                  <progress
                    className="progress-bar"
                    value={location.revenue / 100}
                    strokeColor="#D3D3D3"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="table-container">
            <TopSellingProducts />
          </div>
          <div className="chart-container">
            <SalesPieChart />
          </div>
        </div>
      </div>
    </main>
  );
}

export function RevenueDetailsCards({ data }) {
  return (
    <div className="card" style={{ backgroundColor: data.bgColor }}>
      <h3 className="card-header">{data.field}</h3>
      <div>
        <span
          style={{ fontSize: "24px", fontWeight: "600", paddingRight: "27px" }}
        >
          {data.number}
        </span>
        <span className="smallText">
          <span>{data.percentage}%</span>
          <span className="trend">
            {data.percentage > 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          </span>
        </span>
      </div>
    </div>
  );
}
