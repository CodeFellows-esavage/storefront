//where my products reducer should live

const intialState = {
  products: [
    {
      category: 'category-placeholder',
      name: 'name-placeholder',
      description: 'description-placeholder',
      price: 'price-placeholder',
      inventory: 'inventory-placeholder'
    }
  ]
}

const productReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export default productReducer;