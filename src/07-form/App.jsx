import React, { Component } from "react";

class App extends Component {
    state = { textValue: "", textareaValue: "", selectValue: ["0", "1"] };

    handleChange = () => {
        return (e) => {
            this.setState({
                textValue: e.target.value,
            });
        };
    };

    handleAreaChange = () => {
        return (e) => {
            this.setState({
                textareaValue: e.target.value,
            });
        };
    };

    handleSelectChange = () => {
        return (e) => {
            this.setState({
                selectValue: e.target.value,
            });
        };
    };

    handleSubmit = () => {
        return (e) => {
            e.preventDefault();
            console.log(this.state.textValue);
            console.log(this.state.textareaValue);
            console.log(this.state.selectValue);
        };
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit()}>
                    <input
                        type="text"
                        value={this.state.textValue}
                        onChange={this.handleChange()}
                    />
                    <br />
                    <textarea
                        value={this.state.textareaValue}
                        onChange={this.handleAreaChange()}
                    />
                    <br />
                    <select
                        multiple
                        value={this.state.selectValue}
                        onChange={this.handleSelectChange()}
                    >
                        <option value="0">Beijing</option>
                        <option value="1">Tokyo</option>
                        <option value="2">HongKong</option>
                    </select>
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default App;
