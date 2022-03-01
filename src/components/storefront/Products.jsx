import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addProduct } from "../../store/products";
import ProductCard from "./ProductCard";

function Products(props){
  
  console.log(props.products);

  
  return (
    <>
      <h2>My Product List</h2>
      {props.products.map(product => <ProductCard key={nanoid()} product={product} />)}
      
    </>
  )
}

function mapStateToProps(state){
  return {
    products: state.product.products,
  }
}

const mapDispatchToProps = {
  addProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);