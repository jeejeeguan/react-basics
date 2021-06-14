import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    state = {
        list: [],
    };
    handleReceiveKeywords = () => {
        return (keywords) => {
            this.state.list.push({
                id: new Date().getTime(),
                taskname: keywords,
            });
            this.setState({});
        };
    };
    handleDeleteTask = (id) => {
        return () => {
            let newList = this.state.list.filter((value) => {
                return value.id !== id;
            });

            this.setState({
                list: newList,
            });
        };
    };
    render() {
        return (
            <>
                <Form onReceiveKeywords={this.handleReceiveKeywords()} />
                <List
                    list={this.state.list}
                    onDeleteTask={this.handleDeleteTask}
                />
            </>
        );
    }
}

export default TodoList;
