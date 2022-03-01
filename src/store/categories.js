//where my categories reducer should live

const intialState = {
  categories: [
    { normalizedName: 'electronics', displayName: 'ELECTRONICS', description: 'We Buy And Sell Goods' },
    { normalizedName: 'food', displayName: 'FOOD', description: 'No Food For You!' },
  ],
}

const categoryReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_CATEGORY':
      return { ...state.categories, payload }
    default:
      return state
  }
}

export const addCategory = (category) => {
  return {
    type: 'ADD_CATEGORY',
    payload: category
  }
}

export default categoryReducer;