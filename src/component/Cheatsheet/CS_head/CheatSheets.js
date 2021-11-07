import React, { useState } from "react";
import "./cheatSheets.css";
import CSMenu from "./CSapi";
import CSMenuCard from "./CSMenuCard";

const CheatSheets = () => {
  const [CSMenuData, setCSMenuData] = useState(CSMenu);
  return (
    <div className="main">
      <h1 className="heading">Cheat Sheets</h1>
      <div className="container">
        <CSMenuCard CSMenuData={CSMenuData} />
      </div>
    </div>
  );
};
export default CheatSheets;
