import React from "react";

export default function Task(props){
    return (
        <div className="task">
            {props.text}
            <span className="tooltip-text">{props.taskid}</span>
            <button className="delete-button" onClick={(event)=>props.deleteTask(event, props.taskid-1)}><i className="fa fa-trash"></i></button>
        </div>
    );
}