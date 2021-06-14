import React, { Component } from "react";

const data = "<h1>hello world</h1>";

const Home = () => {
    return <h3>welcome wwdc2021</h3>;
};

class App extends Component {
    state = {};
    render() {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: data }} />
                <label htmlFor="abc">
                    abc <input type="text" id="abc" />
                </label>
                {/* 短路运算，当 && 左侧为 true 时，才加载右侧组件 */}
                {true && <Home />}
            </>
        );
    }
}

export default App;
