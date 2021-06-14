import React, { Component } from "react";

class MultiPick extends Component {
    state = {
        isGoing: true,
        numberofGuests: 0,
    };

    handleChange = () => {
        return (e) => {
            let name = e.target.name;
            let value = name === "isGoing" ? e.target.checked : e.target.value;
            this.setState({
                [name]: value,
            });
        };
    };

    handleClick = () => {
        return (e) => {
            console.log(this.state.isGoing);
            console.log(this.state.numberofGuests);
        };
    };

    render() {
        return (
            <>
                <label>
                    isGoing:
                    <input
                        type="checkbox"
                        name="isGoing"
                        checked={this.state.isGoing}
                        onChange={this.handleChange()}
                    />
                </label>
                <br />
                <label>
                    numberofGuests:
                    <input
                        type="number"
                        name="numberofGuests"
                        value={this.state.numberofGuests}
                        onChange={this.handleChange()}
                    />
                </label>
                <br />
                <button onClick={this.handleClick()}>click</button>
            </>
        );
    }
}

export default MultiPick;
