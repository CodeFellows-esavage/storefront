import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import categoryReducer from "./categories";
import productReducer from "./products";

const reducers = combineReducers({
  category: categoryReducer,
  product: productReducer,
})

//start here at create store....
const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

//can this just be exported as store?

export default createReduxStore;