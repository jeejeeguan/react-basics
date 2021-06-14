import React from "react";
import ReactDOM from "react-dom";
// import App from "./13-redux/02-redux/redux+react/App";
// import store from "./13-redux/02-redux/redux+react/store";
import TodoList from "./13-redux/03-todolist/TodoList";
import { Provider } from "react-redux";
import store from "./13-redux/03-todolist/store/index";

/* function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
store.subscribe(render);
render(); */

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("root")
);
