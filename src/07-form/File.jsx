import React, { Component } from "react";

class File extends Component {
    constructor(props) {
        super(props);
        this.file = React.createRef();
    }

    state = {};

    handleClick = () => {
        return () => {
            console.log(this.file.current.files[0].name);
        };
    };

    render() {
        return (
            <div>
                <input type="file" ref={this.file} />
                <button onClick={this.handleClick()}>get file name</button>
            </div>
        );
    }
}

export default File;
