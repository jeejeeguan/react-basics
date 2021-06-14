import React, { Component } from "react";

// 下面的 {...this.props} 是接收传并展开传递过来的组件的其他参数
const hoc = (Comp) =>
    class extends Component {
        render() {
            return <Comp title="hello" {...this.props}></Comp>;
        }
    };

export default hoc;
