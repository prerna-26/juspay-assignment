import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faStar,
  faSun,
  faClock,
  faBell,
  faMobileAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../components/component_CSS/Middleheaderbar.css";

const MiddleHeadBar = () => {
  return (
    <div className="middle-head-bar">
      <div className="nav-left">
        <FontAwesomeIcon icon={faFolder} className="icon" />
        <FontAwesomeIcon icon={faStar} className="icon" />
        <span className="breadcrumb">
          <span style={{ color: "#1C1C1C33", paddingRight: "5px" }}>
            {" "}
            Dashboards{" "}
          </span>{" "}
          <span style={{ paddingRight: "10px" }}>/</span> Default
        </span>
      </div>
      <div className="nav-right">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <FontAwesomeIcon icon={faSun} className="icon" />
        <FontAwesomeIcon icon={faClock} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faMobileAlt} className="icon" />
      </div>
    </div>
  );
};

export default MiddleHeadBar;
