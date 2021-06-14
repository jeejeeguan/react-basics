import React, { Component } from "react";
import store from "./store";

class App extends Component {
    state = {};
    render() {
        return (
            <>
                <div>
                    <button
                        onClick={store.dispatch.bind(this, {
                            type: "increment",
                        })}
                    >
                        +
                    </button>
                </div>
                <span id="count"></span>
                <div>
                    <button
                        onClick={store.dispatch.bind(this, {
                            type: "decrement",
                        })}
                    >
                        -
                    </button>
                </div>
            </>
        );
    }

    componentDidMount() {
        store.dispatch();
    }
}

export default App;
