import React, { Component } from "react";

class Child extends Component {
    // 静态属性
    // 定义了默认 props，当父组件没有传值当时候，使用默认属性
    static defaultProps = {
        title: "default value",
    };

    render() {
        return (
            <>
                <div>{this.props.title}</div>
                {this.props.children}
            </>
        );
    }
}

// 函数式组件
// const Child = (props) => <div>{props.title}</div>;

export default Child;
