import React from "react";
import { useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";

import { addToCart } from "../../store/cart";
import {removeOne} from '../../store/cart';
import {removeAll} from '../../store/cart';


function CartPreviewItem(props){
  let dispatch = useDispatch();
  console.log('CartPreviewItem Props',props.item)
  return (
    <MenuItem disableRipple style={{display: "flex", justifyContent: "space-evenly"}}>
        <span>{props.item[0].name}</span>
        <div>
          <IconButton onClick={() => dispatch(removeOne(props.item))}>
            <Remove/>
          </IconButton>
          <span>{props.item[1]}</span>
          <IconButton onClick={() => dispatch(addToCart(props.item))}>
            <Add />
          </IconButton>
        </div>
        <IconButton onClick={() => dispatch(removeAll(props.item))}>
          <RemoveShoppingCart/>
        </IconButton>
    </MenuItem>
  )
}

export default CartPreviewItem;