import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange}
        search={search}
        setSearch={setSearch}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.filter((item) => {
          if (search === "") {
            return true;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
