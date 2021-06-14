const { createStore } = require("redux");

const reducer = require("./reducer");

const store = createStore(reducer);

// store.dispatch({
//     type: "increment",
// });

// console.log(store.getState().count);

store.subscribe(() => {
    console.log(store.getState().count);
});

store.dispatch({
    type: "increment",
});
store.dispatch({
    type: "increment",
});
store.dispatch({
    type: "increment",
});
store.dispatch({
    type: "increment",
});
store.dispatch({
    type: "increment",
});
