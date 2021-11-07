import React from "react";
import "./BlogNav.css";

const BlogNav = ({ filterItem, menuList }) => {
  return (
    <div className="navbar">
      {menuList.map((curElem) => {
        return (
          <button className="btn" onClick={() => filterItem(curElem)}>
            {curElem}
          </button>
        );
      })}
    </div>
  );
};

export default BlogNav;
