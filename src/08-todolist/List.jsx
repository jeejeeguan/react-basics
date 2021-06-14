import React from "react";

const List = (props) => {
    return (
        <ul>
            {props.list.map((value) => (
                <li key={value.id}>
                    {value.taskname}
                    <span onClick={props.onDeleteTask(value.id)}> XXXX</span>
                </li>
            ))}
        </ul>
    );
};

export default List;
