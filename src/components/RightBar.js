import React from "react";
import "./component_CSS/rightBar.css";
import RightBarImages from "./RightBarImages";
import { IoBugSharp } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import "../index.css";

const RightBar = () => {
  const notifications = [
    {
      icon: <IoBugSharp />,
      message: "You have a bug that needs...",
      time: "Just Now",
    },
    {
      icon: <MdPermIdentity />,
      message: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <IoBugSharp />,
      message: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      icon: <BsBroadcast />,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];
  const activities = [
    {
      icon: RightBarImages.Profile1,
      message: "You have a bug that...",
      time: "Just Now",
    },
    {
      icon: RightBarImages.Profile2,
      message: "Released a new version",
      time: "59 minutes ago",
    },
    {
      icon: RightBarImages.Profile3,
      message: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      icon: RightBarImages.Profile4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      icon: RightBarImages.Profile5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];
  const contacts = [
    { photo: RightBarImages.Natali, name: "Natali Craig" },
    { photo: RightBarImages.Drew, name: "Drew Cano" },
    { photo: RightBarImages.Orlando, name: "Orlando Diggs" },
    { photo: RightBarImages.Andi, name: "Andi Lane" },
    { photo: RightBarImages.Kate, name: "Kate Marrison" },
    { photo: RightBarImages.Karay, name: "Koray Okumus" },
  ];

  return (
    <div className="sidebar" style={{ width: "250px" }}>
      <div className="section">
        <h3 className="sectionTitle">Notifications</h3>
        <ul className="list">
          {notifications.map((notification) => {
            return (
              <>
                <li className="listItemRight">
                  <div className="notiIcon">{notification.icon}</div>
                  {notification.message}
                </li>
                <div className="timeClass">{notification.time}</div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="section">
        <h3 className="sectionTitle">Activities</h3>
        <ul className="list">
          {activities.map((activity) => {
            return (
              <>
                <li className="listItemRight">
                  <img alt="nothing" src={activity.icon} />
                  {activity.message}
                </li>
                <div className="timeClassAct">{activity.time}</div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="section">
        <h3 className="sectionTitle">Contacts</h3>
        <ul className="list">
          {contacts.map((contact) => {
            return (
              <li className="listItemRight">
                <img alt="nothing" src={contact.photo} />
                {contact.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
