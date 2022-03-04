import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import ProductCard from "./ProductCard";

function Products(props){
  
  const products = useSelector(state => state.product.products);
  const selectedCategory = useSelector(state => state.category.selectedCategory);
  
  const display = () => {
    if (selectedCategory !== 'all'){
      return products.filter(product => product.category === selectedCategory);
    } else {
      return products;
    }
  }

  const productsToDisplay = display();

  return (
    <>
      <h2>My Product List</h2>
      {productsToDisplay.map(product => <ProductCard key={nanoid()} product={product} />)}
    
    </>
  )
}

export default Products;