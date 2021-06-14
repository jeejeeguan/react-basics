import React, { Component } from "react";
import Child from "./Child";

const title = "this is from Child Components";
class DataMount extends Component {
    render() {
        return (
            <>
                <h1>data</h1>
                <Child title={title}>
                    <ul>
                        <li>li Children</li>
                        <li>li Children</li>
                        <li>li Children</li>
                    </ul>
                </Child>
            </>
        );
    }
}

export default DataMount;
