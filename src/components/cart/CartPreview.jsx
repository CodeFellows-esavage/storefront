import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import CartPreviewItem from "./CartPreviewItem";
import Button from '@mui/material/Button';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';

function CartPreview(props){
  
  const items = useSelector(state => state.cart.itemsInCart)
  const itemCount = useSelector(state => state.cart.itemCount)
  
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
        <Badge badgeContent={itemCount} color="primary">
          <ShoppingCartIcon color="action" fontSize="large" />
        </Badge>
      </Button>
      {items.length > 0 && <Menu
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
        {items.map(item =>
          <CartPreviewItem key={nanoid()} item={item}/>
        )}
      </Menu>}
    </div>


  )
}

export default CartPreview;