// 定义初始状态
const defaultState = {
    count: 0,
};

// 修改状态
const changeState = (action) => {
    // 容错处理
    action = action || { type: "" };

    switch (action.type) {
        case "increment":
            defaultState.count++;
            break;
        case "decrement":
            defaultState.count--;
            break;
        default:
    }
};

// DOM 操作
const renderDom = () => {
    let countEle = document.querySelector("#count");
    countEle.innerHTML = defaultState.count;
};

const dispatch = (action) => {
    changeState(action);
    renderDom();
};

export { dispatch };
