import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class TodoList extends Component {
    render() {
        return (
            <div>
                <Form />
                <List />
            </div>
        );
    }
}

export default TodoList;
