import React, { Component } from "react";
import { connect } from "react-redux";
import { putDataAction } from "./store/actionCreator";

// 映射 Dispatch 到当前组件的 props 上
const mapDispatchToProps = (dispatch) => {
    return {
        putData(task) {
            dispatch(putDataAction(task));
        },
    };
};

@connect(null, mapDispatchToProps)
class Form extends Component {
    state = {
        task: "",
    };

    handleChange = (e) => {
        this.setState({
            task: e.target.value,
        });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.putData(this.state.task);
            this.setState({
                task: "",
            });
        }
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}

export default Form;
