import React, { Component } from "react";
import ChildHood from "./ChildHood";
import { CountConsumer } from "./Count";

class Child extends Component {
    render() {
        return (
            <div>
                <CountConsumer>
                    {({ count }) => {
                        return <div>Child Component: {count}</div>;
                    }}
                </CountConsumer>
                <ChildHood />
            </div>
        );
    }
}

export default Child;
