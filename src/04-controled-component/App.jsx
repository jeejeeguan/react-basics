import React, { Component, createRef } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.ipt = createRef();
    }

    state = {
        textValue: "hello wwdc2021",
    };

    handleChange(e) {
        this.setState({
            textValue: e.target.value,
        });
    }

    render() {
        return (
            <div>
                {/* 受控 input 组件 */}
                {/* <input
                    value={this.state.textValue}
                    type="text"
                    onChange={this.handleChange.bind(this)}
                /> */}

                {/* 非受控 input 组件 */}
                <input
                    type="text"
                    ref={this.ipt}
                    onInput={this.handleChange.bind(this)}
                />
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.textValue);
        }, 5000);
    }
}

export default App;
