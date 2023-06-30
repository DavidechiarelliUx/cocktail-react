import React, { useState } from "react";
import "./index.css";

const Filters = ({ categoryList, setCategoryList }) => {
  const [categories, setCategories] = useState(categoryList.map((category) => ({
    name: category,
    disabled: false,
  })));

  const handleCheckboxChange = (categoryName) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            disabled: !category.disabled,
          };
        } else {
          return category;
        }
      });
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const selectedCategories = categories
      .filter((category) => !category.disabled)
      .map((category) => category.name);
    setCategoryList(selectedCategories);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          {categories.map((category) => (
            <label key={category.name}>
              <input
                type="checkbox"
                checked={!category.disabled}
                onChange={() => handleCheckboxChange(category.name)}
              />
              {category.name}
            </label>
          ))}
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Filters;