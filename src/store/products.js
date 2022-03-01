//where my products reducer should live

const intialState = {
  products: [
    {
      category: 'electronics',
      name: 'MacBook Air',
      description: '13" Laptop with M1 Chip',
      price: 1500,
      inventory: 5
    },
    {
      category: 'food',
      name: 'Donut',
      description: 'Assorted flavors',
      price: 2,
      inventory: 12
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