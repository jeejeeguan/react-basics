import React, { Component } from "react";

class StateCom1 extends Component {
    // 构造函数定义 state 的方法
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
    }
    render() {
        return this.state.isShow ? (
            <button>state is show</button>
        ) : (
            <button>state is not show</button>
        );
    }
}

class StateCom2 extends Component {
    // state 属性定义 state 的方法
    state = {
        isOnline: true,
        count: 0,
        alpha: [],
    };
    render() {
        return (
            <>
                {this.state.isOnline ? (
                    <button>state is onLine</button>
                ) : (
                    <button>state is offLine</button>
                )}
                {this.state.count}
                <ul>
                    {this.state.alpha.map((value, index) => {
                        return <li key={value + index}>{value}</li>;
                    })}
                </ul>
            </>
        );
    }
    componentDidMount() {
        // setTimeout(() => {
        // this.setState({
        //     isOnline: !this.state.isOnline,
        // });
        // 这种写法以原 state 为依据修改，有风险，可以改为下面的 prevState 方式

        // this.setState(
        //     (prevState) => {
        //         return {
        //             isOnline: !prevState.isOnline,
        //             count: prevState.count + 1,
        //         };
        //     },
        //     () => {
        //         console.log(document.querySelector("#root").innerHTML);
        //     } // setState 第二个参数为回调函数，用来等待 DOM 渲染完成之后执行
        // );
        // }, 3000);

        this.state.alpha.push("a");
        this.setState({}); // 显式地告诉 React 用这个空对象跟原对象做 Merge，push 后的内容才出现
    }
}

class StateComs extends Component {
    render() {
        return (
            <>
                <StateCom1 />
                <StateCom2 />
            </>
        );
    }
}

export default StateComs;
