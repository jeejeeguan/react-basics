import React, { Component } from "react";
import { Provider, testContext, Consumer } from "./testContext";

class Child1 extends Component {
    static contextType = testContext;
    render() {
        console.log(this);
        return <div>Child1: {this.context}</div>;
    }
}

class Child2 extends Component {
    render() {
        return <Child3 />;
    }
}

const Child4 = () => {
    return (
        <div>
            Child4
            <Consumer>
                {(value) => {
                    return <div>{value}</div>;
                }}
            </Consumer>
        </div>
    );
};
const Child3 = () => {
    return <Child4 />;
};

class App extends Component {
    state = {};
    render() {
        return (
            <Provider value="hello">
                <Child1 />
                <Child2 />
            </Provider>
        );
    }
}

export default App;
