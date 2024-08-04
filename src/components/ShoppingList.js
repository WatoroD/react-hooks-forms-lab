import React, { useState } from "react";
import uuid from 'uuid';
import Filter from './Filter';
import ItemForm from './ItemForm';
import Item from './Item';

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: uuid(), name: 'Apple', category: 'Fruits' },
    { id: uuid(), name: 'Carrot', category: 'Vegetables' },
    { id: uuid(), name: 'Milk', category: 'Dairy' },
  ]);

  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (category === '' || item.category === category)
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        value={searchText}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;