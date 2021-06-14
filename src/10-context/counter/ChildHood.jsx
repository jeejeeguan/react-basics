import React, { Component } from "react";
import { CountConsumer } from "./Count";
import { Consumer as ShowConsumer } from "./showContext";

class ChildHood extends Component {
    render() {
        return (
            <div>
                <CountConsumer>
                    {({ count, increment, decrement }) => {
                        return (
                            <div>
                                ChildHood Component:
                                <ShowConsumer>
                                    {(value) => (
                                        <div>
                                            {count} / {value.show}
                                        </div>
                                    )}
                                </ShowConsumer>
                                <div>
                                    <button onClick={() => increment(3)}>
                                        +
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => decrement(3)}>
                                        -
                                    </button>
                                </div>
                            </div>
                        );
                    }}
                </CountConsumer>
            </div>
        );
    }
}

export default ChildHood;
