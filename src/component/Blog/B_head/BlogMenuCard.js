import React from "react";
import "./BlogMenuCard.css";
const BlogMenuCard = ({ BlogMenuData }) => {
  return (
    <div className="card-menu">
      {BlogMenuData.map((curElem) => {
        const { id, image, time, category, title, link } = curElem;
        return (
          <div className="card">
            <a href={link} className="card-body">
              <div className="menucard" key={id}>
                <img src={image} alt="" className="img" width="300px" />
                <span className="time">{time}</span>
                <br />
                <span className="category">{category}</span>
                <h2 className="title">{title}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BlogMenuCard;
