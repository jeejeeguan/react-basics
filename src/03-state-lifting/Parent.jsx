import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
    state = {
        data: "mother fuck",
    };
    handleReceiveData(props) {
        this.setState({
            data: props,
        });
    }
    render() {
        console.log(this.state.data);
        return (
            <>
                <Child1 onReceiveData={this.handleReceiveData.bind(this)} />
                <Child2 data={this.state.data} />
            </>
        );
    }
}

export default Parent;
