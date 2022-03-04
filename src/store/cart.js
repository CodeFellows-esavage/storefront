//need intial state
const intialState = {
  itemsInCart: [],
  itemCount: 0
}

//an item should be a product name, and count

//need reducer function
const cartReducer = (state = intialState, action) => {
  let { type, payload } = action;

  let product;
  let qty = 0;

  switch (type) {
    case 'ADD_TO_CART':
      product = payload.length ? payload[0] : payload;
      //for loop checks if the item exists in the cart, and grabs the qty in cart
      for (let i = 0; i < state.itemsInCart.length; i++) {
        if (state.itemsInCart[i][0].name === product.name) {
          qty = state.itemsInCart[i][1];
          break
        }
      }
      console.log("QTY", qty);
      let renderArray = state.itemsInCart.filter(item => item[0].name !== product.name)
      return { ...state, itemsInCart: [...renderArray, [product, qty + 1]], itemCount: state.itemCount + 1 }
    case 'REMOVE_ONE':
      product = payload[0];
      qty = payload[1];

      if (payload[1] > 1) {
        let renderArray = state.itemsInCart.filter(item => item[0].name !== product.name)
        return { ...state, itemsInCart: [...renderArray, [product, qty - 1]], itemCount: state.itemCount - 1 }
      } else {
        let renderArray = state.itemsInCart.filter(item => item[0].name !== product.name)
        return { ...state, itemsInCart: renderArray, itemCount: state.itemCount - 1 };
      }
    case 'REMOVE_ALL':
      product = payload[0];
      qty = payload[1];
      let removeAllArr = state.itemsInCart.filter(item => item[0].name !== product.name)
      return { ...state, itemsInCart: removeAllArr, itemCount: state.itemCount - qty };
    default:
      return state;
  }
}

//need actions
export function addToCart(item) {
  console.log('add to cart', item);
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}

export function removeOne(item) {
  return {
    type: 'REMOVE_ONE',
    payload: item
  }
}

export function removeAll(item) {
  return {
    type: 'REMOVE_ALL',
    payload: item
  }
}

export default cartReducer;
