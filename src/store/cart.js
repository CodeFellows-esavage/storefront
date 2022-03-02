//need intial state
const intialState = {
  items: [],
  itemCount: 0
}

//an item should be a product name, and count

//need reducer function
const cartReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      //write statement to check if the product is in the cart already, if it is, increment that specific item count
      return { ...state, items: [...state.items, payload], itemCount: payload }
    default:
      return state;
  }
}

//need actions
export function addToCart(item) {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}

export default cartReducer;
