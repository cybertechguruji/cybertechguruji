import React, { useState } from "react";
import "./Blog.css";
import BlogMenu from "./blogApi";
import BlogMenuCard from "./BlogMenuCard";
import BlogNav from "./BlogNav";

const uniqueList = [
  ...new Set(
    BlogMenu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Blog = () => {
  const [BlogMenuData, setBlogMenuData] = useState(BlogMenu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setBlogMenuData(BlogMenu);
      return;
    }
    const updatedList = BlogMenu.filter((curElem) => {
      return curElem.category === category;
    });
    setBlogMenuData(updatedList);
  };
  return (
    <div className="main">
      <h1 className="heading">Blog</h1>
      <div className="container">
        <BlogNav filterItem={filterItem} menuList={menuList} />
        <BlogMenuCard BlogMenuData={BlogMenuData} />
      </div>
    </div>
  );
};
export default Blog;
