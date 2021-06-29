import React from "react";
import ReactDOM from "react-dom";
import Basic from "./14-router/Basic";
// import App from "./13-redux/02-redux/redux+react/App";
// import store from "./13-redux/02-redux/redux+react/store";
// import TodoList from "./13-redux/03-todolist/TodoList";
// import { Provider } from "react-redux";
// import store from "./13-redux/03-todolist/store/index";
<<<<<<< HEAD
// import Basic from "./14-router/Basic";
import UrlParameters from "./14-router/UrlParameters";
import { BrowserRouter as Router } from "react-router-dom";
=======
>>>>>>> origin/main

/* function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
store.subscribe(render);
render(); */

<<<<<<< HEAD
/* ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("root")
); */

// ReactDOM.render(<Basic />, document.getElementById("root"));

ReactDOM.render(
    <Router>
        <UrlParameters />
    </Router>,
    document.getElementById("root")
);
=======
// ReactDOM.render(
//     <Provider store={store}>
//         <TodoList />
//     </Provider>,
//     document.getElementById("root")
// );
ReactDOM.render(<Basic />, document.getElementById("root"));
//
>>>>>>> origin/main
