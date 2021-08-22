import React from "react";
import "./Category.css";

const Category = ({ Icon, title, isSelected }) => {
  return (
    <div
      className={`category category__${title.toLowerCase()} ${
        isSelected ? "category__selected" : ""
      }`}
    >
      <Icon className="category__icon" />
      <span className="category__title">{title}</span>
    </div>
  );
};

export default Category;
