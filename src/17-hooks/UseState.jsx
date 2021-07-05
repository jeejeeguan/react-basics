import React, { useState } from "react";

// 类组件实现
// class UseState extends React.Component {
//     state = {
//         count: 0,
//     };
//     handleClick() {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <div> {this.state.count} </div>
//                 <button onClick={this.handleClick.bind(this)}>add</button>
//             </div>
//         );
//     }
// }

// hooks 函数组件实现
const UseState = (props) => {
    let [count, setCount] = useState(0);

    // 简写形式1
    // function handleClick() {
    //     setCount(count + 1);
    // }

    // 形式2
    // function handleClick() {
    //     setCount(() => count + 1);
    // }

    // 形式3
    function handleClick() {
        setCount((count) => {
            console.log(count);
            return count + 1;
        });
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleClick}>add</button>
        </div>
    );
};

export default UseState;
