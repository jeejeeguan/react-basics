import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Child extends Component {
    render() {
        return <div> {this.props.match.params.id} </div>;
    }

    componentDidMount() {
        console.log(this);
    }
}

class UrlParameters extends Component {
    state = {};
    render() {
        return (
            <div>
                <Route path="/:id" component={Child} />
                <ul>
                    <li>
                        <Link to="/aaa">aaa</Link>
                    </li>
                    <li>
                        <Link to="/bbb">bbb</Link>
                    </li>
                    <li>
                        <Link to="/ccc">ccc</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UrlParameters;
