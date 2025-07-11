import React from 'react';
import { categoryTabs } from './config';
import Button from '../shared/Button';

const CategoryTabs = () => {
  return (
    <div className="container category-tabs">
      <Button subClass={"category-btn category-btn-active"} >Акции</Button>
      {categoryTabs.map((category) => (
        <Button subClass={"category-btn"} key={category}>{category}</Button>
      ))}
    </div>
  );
};

export default CategoryTabs;