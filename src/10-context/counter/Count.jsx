import React, { Component, createContext } from "react";

// createContext({...}) 定义了默认值，当找不到<Provider>时候，使用默认值
const { Provider, Consumer: CountConsumer } = createContext({
    count: 100,
    increment: () => {
        console.log(1);
    },
    decrement: () => {
        console.log(0);
    },
});
// const 解构，给变量起别名用 : 冒号
// import { x as abc } from "./App"
// import 解构，给变量起别名用 as

class CountProvider extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    state = {
        count: 0,
    };
    increment(args) {
        this.setState((state) => ({ count: state.count + args }));
    }
    decrement(args) {
        this.setState((state) => ({ count: state.count - args }));
    }
    render() {
        return (
            <Provider
                value={{
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { CountProvider, CountConsumer };
