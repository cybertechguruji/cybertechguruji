import React from "react";
import "./CSMenuCard.css";
const CSMenuCard = ({ CSMenuData }) => {
  return (
    <div className="card-menu">
      {CSMenuData.map((curElem) => {
        return (
          <div className="card">
            <a
              href={curElem.link}
              className="card-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="menucard" key={curElem.id}>
                <img src={curElem.image} alt="" className="img" width="300px" />
                <h2 className="title">{curElem.title}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CSMenuCard;
