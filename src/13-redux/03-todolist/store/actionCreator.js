const removeAction = (index) => {
    return {
        type: "REMOVE_DATA",
        index,
    };
};

const putDataAction = (task) => {
    return {
        type: "PUT_DATA",
        task,
    };
};

const setdataAction = (data) => {
    // 同步操作
    return {
        type: "SET_DATA",
        data,
    };
};

const loaddataAction = () => {
    return (dispatch) => {
        // 异步操作
        fetch("/position.json")
            .then((response) => response.json())
            .then((result) => {
                dispatch(setdataAction(result.result));
            });
    };
};

export { removeAction, putDataAction, setdataAction, loaddataAction };
