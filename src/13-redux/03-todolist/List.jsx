import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAction, loaddataAction } from "./store/actionCreator";

// 映射 state 到当前组件的 props 上
const mapStateToProps = (state) => {
    return {
        list: state.list,
    };
};

// 映射 Dispatch 到当前组件的 props 上
const mapDispatchToProps = (dispatch) => {
    return {
        remove(index) {
            dispatch(removeAction(index));
        },

        loadData() {
            dispatch(loaddataAction());
        },

        test() {
            dispatch({
                type: "abc",
            });
        },
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    handleClick = (index) => {
        return () => {
            this.props.remove(index);
        };
    };
    render() {
        // 组件的 this.props.list 属性来自 @connect(mapStateToProps) 绑定过来的
        return (
            <ul>
                {this.props.list.map((value, index) => {
                    let { positionName } = value;
                    return (
                        <li key={index}>
                            {positionName}
                            <button onClick={this.handleClick(index)}>
                                remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }

    componentDidMount() {
        // this.props.loadData();
        this.props.test();
    }
}

// connect 方法第一次调用的返回值是个高阶组件
// export default connect(mapStateToProps)(List);
// 也可以用装饰器的方法

export default List;
