import React from 'react';
import CartPreview from '../cart/CartPreview'

function Header(props){
  return (
    <header>
      <h1>Store Front Header</h1>
      <CartPreview />
    </header>
  )
}
export default Header;