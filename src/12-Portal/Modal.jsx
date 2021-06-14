import React, { Component } from "react";
import withPortal from "./withPortal";

@withPortal // 装饰器，相当于高阶组件的作用
class Modal extends Component {
    state = {};
    render() {
        return (
            <div>
                <h1>Portal Header</h1>
                <button>add</button>
                <div>{this.props.title}</div>
            </div>
        );
    }
}

export default Modal;
