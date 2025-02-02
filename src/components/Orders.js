import RightBarImages from "./RightBarImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAdd,
  faArrowUpShortWide,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";

const orderHeaders = [
  "Order ID",
  "User",
  "Project",
  "Address",
  "Date",
  "Status",
];
const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    photo: RightBarImages.Natali,
    project: "Landing Page",
    address: "Meadow Lane OakLand",
    date: "Just Now",
    status: "In Progress",
    color: "#8A8CD9",
  },
  {
    id: "#CM9802",
    user: "Kate Marrison",
    photo: RightBarImages.Kate,
    project: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    color: "#4AA785",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    photo: RightBarImages.Drew,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    color: "#59A8D4",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    photo: RightBarImages.Orlando,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    color: "#FFC555",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    photo: RightBarImages.Andi,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb2, 2023",
    status: "Rejected",
    color: "#1C1C1C66",
  },
  {
    id: "#CM9801",
    user: "Natali Craig",
    photo: RightBarImages.Natali,
    project: "Landing Page",
    address: "Meadow Lane OakLand",
    date: "Just Now",
    status: "In Progress",
    color: "#8A8CD9",
  },
  {
    id: "#CM9802",
    user: "Kate Marrison",
    photo: RightBarImages.Kate,
    project: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    color: "#4AA785",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    photo: RightBarImages.Drew,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    color: "#59A8D4",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    photo: RightBarImages.Orlando,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    color: "#FFC555",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    photo: RightBarImages.Andi,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb2, 2023",
    status: "Rejected",
    color: "#1C1C1C66",
  },
];

export default function Orders() {
  return (
    <div>
      <div className="row upperDivCss">
        <div className="left-section">
          <h2 className="section-title">Order List</h2>
          <div
            className="middle-head-bar"
            style={{ backgroundColor: "#F7F9FB", borderRadius: "8px" }}
          >
            <div className="nav-left">
              <FontAwesomeIcon icon={faAdd} className="icon" />
              <FontAwesomeIcon icon={faArrowUpWideShort} className="icon" />
              <FontAwesomeIcon icon={faArrowUpShortWide} className="icon" />
            </div>
            <div className="nav-right">
              <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th className="orders-table-header ">
                    <input type="checkbox" className="checkbox" />
                  </th>
                  {orderHeaders.map((header) => {
                    return <th className="orders-table-header">{header}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="orders-table-data">
                      {" "}
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td className="orders-table-data">{order.id}</td>
                    <td
                      className="orders-table-data"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <img alt="nothing" src={order.photo} />
                      </span>
                      {order.user}
                    </td>
                    <td className="orders-table-data">{order.project}</td>
                    <td className="orders-table-data">{order.address}</td>
                    <td className="orders-table-data">{order.date}</td>
                    <td
                      className="orders-table-data"
                      style={{ color: order.color }}
                    >
                      <span
                        className="sales-dot"
                        style={{
                          backgroundColor: order.color,
                          display: "inline-flex",
                        }}
                      ></span>
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
