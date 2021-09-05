import React from "react";
import "./Category.css";

const Category = ({children, Icon, title, isSelected}) => {
  return (
    <div
      className={`category category__${title.toLowerCase()} ${
        isSelected ? "category__selected" : ""
      }`}
    >
      <Icon className="category__icon"/>

      <div className={"category__text"}>
        <span className="category__title">{title}</span>

        {children && <span className="category__child">{children}</span>}
      </div>
    </div>
  );
};

export default Category;
