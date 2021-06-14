import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
    state = {
        color: "red",
        width: "20",
    };
    render() {
        return <Child color={this.state.color} />;
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                width: "30",
            });
        }, 2000);
    }
}

export default App;
