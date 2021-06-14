import React, { Component } from "react";
import Child from "./Child";
import { CountProvider } from "./Count";

class App extends Component {
    render() {
        return (
            <CountProvider>
                <Child />
            </CountProvider>
        );
    }
}

export default App;
