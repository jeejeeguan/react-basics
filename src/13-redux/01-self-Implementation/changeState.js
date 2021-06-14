// let defaultState = {
//     count: 0,
// };

// 纯函数
// 1、相同的入参，得到相同的输出
// 2、 不能修改入参
const changeState = (state, action) => {
    action = action || { type: "" };
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
            };
        case "decrement":
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export { changeState };
