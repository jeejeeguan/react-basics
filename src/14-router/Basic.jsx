import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const DashBoard = () => <div>DashBoard</div>;

class Basic extends Component {
    state = {};
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={DashBoard} />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                </ul>
            </Router>
        );
    }
}

export default Basic;
