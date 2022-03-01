import React from "react";
import {connect} from 'react-redux';
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import {addCategory} from '../../store/categories.js'
import {selectCategory} from '../../store/categories.js'

function Categories(props){
  console.log(props.categories);
  const dispatch = useDispatch();
  console.log('DISPATCH', dispatch);
  const handleClick = (event) =>{
    console.log(event.target.textContent);
    console.log(props);
    dispatch(selectCategory(event.target.textContent));
    // props.store.dispatch(selectCategory(event.target.textContent));
  }
  
  return(
   <div>
      <h2>Browse These Categories...</h2>
      {props.categories.map(category => 
      <span style={{margin: 15}} key={nanoid()} onClick={handleClick}>{category.displayName}</span>
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