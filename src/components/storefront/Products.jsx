import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addProduct } from "../../store/products";

function Products(props){
  
  console.log(props.products);

  
  return (
    <>
      <h2>My Product List</h2>
      {props.products.map(product => <p key={nanoid()}>{product.name}</p>)}
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