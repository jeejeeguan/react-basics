import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

import thunk from "redux-thunk";

// 中间件一旦挂上，dispatch 就会被中间件拦下来
const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);
// console.log(store);

export default store;
