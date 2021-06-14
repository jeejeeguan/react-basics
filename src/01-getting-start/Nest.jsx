import React from "react";

class Header extends React.Component {
    render() {
        return <h1>Header</h1>;
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>Search for the keywords to learn more about each warning.</div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Content />
            </>
        );
    }
}
