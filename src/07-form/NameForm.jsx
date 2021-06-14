import React, { Component, createRef } from "react";

// 非受控组件
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = createRef();
    }
    handleSubmit(e) {
        alert("A name was submitted: " + this.input.current.value);
    }
    state = {};
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input} defaultValue="abc" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;
