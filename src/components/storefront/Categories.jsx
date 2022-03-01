import React from "react";
import {connect} from 'react-redux';
import { nanoid } from "nanoid";
import {addCategory} from '../../store/categories.js'

function Categories(props){
  console.log(props.categories);
  return(
   <div>
      <h2>Browse These Categories...</h2>
      {props.categories.map(category => <p key={nanoid()}>{category.displayName}</p>)}
   </div>

  )
}

function mapStateToProps(state){
  return {
    categories: state.category.categories,
  }
}

const mapDispatchToProps = {
  addCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);