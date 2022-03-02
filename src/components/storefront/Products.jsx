import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addProduct } from "../../store/products";
import { addToCart } from "../../store/cart";
import ProductCard from "./ProductCard";

function Products(props){
  
  // console.log(props.products);
  // console.log('PROPS IN PRODUCTS',props);
  
  const display = () => {
    if (props.selectedCategory !== 'all'){
      return props.products.filter(product => product.category === props.selectedCategory);
    } else {
      return props.products;
    }
  }

  const productsToDisplay = display();

  return (
    <>
      <h2>My Product List</h2>
      {productsToDisplay.map(product => <ProductCard key={nanoid()} addToCart={props.addToCart} product={product} />)}
    
    </>
  )
}

function mapStateToProps(state){
  return {
    products: state.product.products,
    selectedCategory: state.category.selectedCategory,
  }
}

const mapDispatchToProps = {
  addProduct,
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);