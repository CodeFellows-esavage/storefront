import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { nanoid } from "nanoid";
import {selectCategory} from '../../store/categories.js'

function Categories(props){
  
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);


  return(
   <div>
      <h2>Browse These Categories...</h2>
      {categories.map(category => 
        <span style={{margin: 15}} key={nanoid()} onClick={() => dispatch(selectCategory(category))}>{category.displayName}</span>
      )}
   </div>
  )
}

export default Categories;