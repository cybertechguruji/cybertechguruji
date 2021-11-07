import React, { useState } from "react";
import "./Project.css";
import PMenu from "./ProjectApi";
import PMenuCard from "./PMenuCard";

const Project = () => {
  const [PMenuData, setPMenuData] = useState(PMenu);
  return (
    <div className="main">
      <h1 className="heading">Project</h1>
      <div className="container">
        <PMenuCard PMenuData={PMenuData} />
      </div>
    </div>
  );
};
export default Project;
