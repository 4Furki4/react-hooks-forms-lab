import React from "react";
import { useState } from "react";
function Filter({ onCategoryChange, search, onSearchChange }) {


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..."
        value={search} onChange={onSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
