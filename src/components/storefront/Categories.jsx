import React from "react";
import {connect} from 'react-redux';
import { nanoid } from "nanoid";
import {addCategory} from '../../store/categories.js'
import {selectCategory} from '../../store/categories.js'

function Categories(props){

  return(
   <div>
      <h2>Browse These Categories...</h2>
      {props.categories.map(category => 
      <span style={{margin: 15}} key={nanoid()} onClick={() => props.selectCategory(category)}>{category.displayName}</span>
      )}
   </div>

  )
}

function mapStateToProps(state){
  return {
    categories: state.category.categories,
    selected: state.category.selected,
  }
}

const mapDispatchToProps = {
  addCategory,
  selectCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);