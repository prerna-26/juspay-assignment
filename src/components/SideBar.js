import React, { useState } from "react";
import "./component_CSS/sideBar.css";
import {
  FaRegCircle,
  FaChartPie,
  FaIdBadge,
  FaIdCard,
  FaBook,
} from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import {
  IoBagHandleOutline,
  IoBookOutline,
  IoChatbubbles,
} from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

function Sidebar({ setIsOpenOrdersPage }) {
  const [isPagesOpen, setPagesOpen] = useState(true);

  return (
    <div className="sidebar">
      <div className="profile">
        <span className="profileName">
          <CgProfile className="CgProfile" />
          ByeWind
        </span>
      </div>
      <div>
        <span className="favoritesItem favoritesItem1">Favorites</span>
        <span className="favoritesItem">Recently</span>
      </div>
      <div className="section">
        <ul className="list">
          <li className="listItem">
            <FaRegCircle className="circles" />
            Overview
          </li>
          <li className="listItem">
            <FaRegCircle className="circles" />
            Projects
          </li>
        </ul>
      </div>
      <div className="section">
        <h3 className="sectionTitle favoritesItem">Dashboards</h3>
        <ul className="list">
          <li onClick={() => setIsOpenOrdersPage(false)} className="listItem selectedTab">
            <FaChartPie className="left-icon  " />
            Default
          </li>
          <li onClick={() => setIsOpenOrdersPage(false)} className="listItem">
            <IoBagHandleOutline className="left-icon" />
            eCommerce
          </li>
          <li onClick={() => setIsOpenOrdersPage(true)} className="listItem">
            <IoBagHandleOutline className="left-icon" />
            Orders
          </li>
          <li className="listItem">
            <BsFolder className="left-icon" />
            Projects
          </li>
          <li className="listItem">
            <IoBookOutline className="left-icon" />
            Online Courses
          </li>
        </ul>
      </div>
      <div className="section">
        <h3 className="sectionTitle favoritesItem">Pages</h3>
        <ul className="list">
          <li className="listItem" onClick={() => setPagesOpen(!isPagesOpen)}>
            <span className="toggleIcon">
              {isPagesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </span>{" "}
            <FaIdBadge className="FaIdBadge" />
            User Profile
          </li>
          {isPagesOpen && (
            <>
              <li className="listItem">Overview</li>
              <li className="listItem">Projects</li>
              <li className="listItem">Campaigns</li>
              <li className="listItem">Documents</li>
              <li className="listItem">Followers</li>
            </>
          )}
          <li className="listItem">
            <FaIdCard className="left-icon" />
            Account
          </li>
          <li className="listItem">
            <HiMiniUserGroup className="left-icon" />
            Corporate
          </li>
          <li className="listItem">
            <FaBook className="left-icon" />
            Blog
          </li>
          <li className="listItem">
            <IoChatbubbles className="left-icon" />
            Social
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
