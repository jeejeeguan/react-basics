import React, { Component } from "react";
import hoc from "./hoc";

// @hoc
class App extends Component {
    render() {
        return (
            <div>
                {this.props.title} {this.props.msg}
            </div>
        );
    }

    componentDidMount() {
        console.log(this);
    }
}

export default hoc(App);
// export default App;
