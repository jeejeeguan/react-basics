const defaultState = {
    list: ["task1", "task2"],
};

//  纯函数，不能做有副作用的操作
const reducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                list: action.data,
            };
        case "PUT_DATA":
            return {
                list: [
                    ...state.list,
                    {
                        positionId: new Date().getTime(),
                        positionName: action.task,
                    },
                ],
            };
        case "REMOVE_DATA":
            let newList = state.list.filter((value, index) => {
                return index !== action.index;
            });
            return {
                ...state,
                list: newList,
            };
        default:
            return state;
    }
};

export default reducer;
