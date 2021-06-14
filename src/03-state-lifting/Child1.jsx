import React from "react";

const Child1 = (props) => {
    return (
        <h1 onClick={props.onReceiveData.bind(this, "hello world.")}>Child1</h1>
    );
};

export default Child1;
