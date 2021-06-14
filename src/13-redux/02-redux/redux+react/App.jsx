import React, { Component } from "react";
import store from "./store";

class App extends Component {
    increment = () => store.dispatch({ type: "increment" });
    decrement = () => store.dispatch({ type: "decrement" });
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{store.getState().count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default App;
