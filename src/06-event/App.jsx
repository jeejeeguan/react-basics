import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 1,
        };
    }

    // 事件柯里化
    handleClick = (args) => {
        return (e) => {
            // 既能获取到 state
            console.log(this.state.count);
            // 也能获取到事件传来的参数
            console.log(args);
            console.log(e.target);
        };
    };

    render() {
        return (
            <button onClick={this.handleClick("args from button component")}>
                click me
            </button>
        );
    }
}
