import { changeState } from "./changeState";

let state = {
    count: 0,
};

const createStore = () => {
    // getState 获取状态
    const getState = () => state;

    // 观察者模式
    const listeners = [];

    // subscribe 订阅
    const subscribe = (listener) => listeners.push(listener);

    const dispatch = (action) => {
        state = changeState(state, action);
        // publish 发布
        listeners.forEach((listener) => listener());
    };

    return {
        dispatch,
        getState,
        subscribe,
    };
};

const store = createStore();

const render = () => {
    document.querySelector("#count").innerHTML = store.getState().count;
};

store.subscribe(render);

export default store;
