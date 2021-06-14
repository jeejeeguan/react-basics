import React, { PureComponent } from "react";

class Child extends PureComponent {
    render() {
        console.log("rendered");
        return <div>color: {this.props.color}</div>;
    }
}

export default Child;
