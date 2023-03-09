import React from "react";
import {useDispatch} from "react-redux";
import {completeTask, deleteTask} from "./task.Slice";

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <input type="checkbox" onClick={()=>dispatch(completeTask(task))} checked={task.completed} />
            <span>{task.title}</span>
            <button onClick={() => dispatch((task))}>DELETE</button>
        </div>
    );
}
export  default TaskItem;