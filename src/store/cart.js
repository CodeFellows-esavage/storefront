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
      console.log('ADD TO CART PAYLOAD', payload);
      let qty = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i][0] === payload.name) {
          qty = state.items[i][1];
          break
        }
      }
      let renderArray = state.items.filter(item => item[0] !== payload.name)
      return { ...state, items: [...renderArray, [payload.name, qty + 1]], itemCount: state.itemCount + 1 }
    case 'REMOVE_ONE':
      return
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
