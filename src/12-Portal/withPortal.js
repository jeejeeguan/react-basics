import React, { Component } from "react";
import { createPortal } from "react-dom";

/* function getDivNode() {
    let div = document.createElement("div");
    document.body.appendChild(div);
    return div;
} */

function withPortal(WrapperComponent) {
    return class extends Component {
        render() {
            return createPortal(
                <WrapperComponent {...this.props} />,
                document.querySelector("body")
            );
        }
    };
}

export default withPortal;
