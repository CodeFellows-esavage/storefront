import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import Button from '@mui/material/Button';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { addToCart } from '../../store/cart'

function CartPreview(props){
  console.log('CartPreview Props: ', props);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
      <Button size="large"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
      > CART
        <Badge badgeContent={props.itemCount} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Button>
      {props.items.length > 0 && <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            width: 350,
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.items.map(item =>
          <MenuItem key={nanoid()}>{item[0]}----{item[1]}</MenuItem> 
          )}
        

      </Menu>}
    </div>


  )
}

export function mapStateToProps(state){
  return {
    items: state.cart.items,
    itemCount: state.cart.itemCount,
  }
}

const mapDispatchToProps = {
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);