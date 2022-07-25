import React from "react";
import Task from "./components/Task.js";
import Footer from "./components/Footer.js";
import "./styles.css";

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var lightColor = generateRandomColor();

export default function App(props){
    const [newTask, setNewTask] = React.useState("");
    const [myTasks, setMyTasks] = React.useState(()=> {
        var hist = JSON.parse(localStorage.getItem("myTasks"));
        return hist ? hist: [];
    });

    function addTask(event){
        event.preventDefault();
        setMyTasks([...myTasks, newTask])
        setNewTask("")
    }

    function watchTask(event){
        setNewTask(event.target.value)
    }

    function deleteTask(event, taskid){
        var newMyTasks = myTasks.slice()
        newMyTasks.splice(taskid, 1)
        setMyTasks(newMyTasks)
    }

    React.useEffect(() => {
        localStorage.setItem("myTasks", JSON.stringify(myTasks))
    }, [myTasks])

    var mytasks_converted = myTasks.map((task, index) => <Task text={task} key={index} taskid={index+1} deleteTask={deleteTask}/>)

    var styles = {
        backgroundColor: lightColor
    }
    var final_ele = (
        <div className="main-content" style={styles}>
            <div className="content">
                <form action="#" onSubmit={addTask}>
                    <input 
                        type="text" 
                        placeholder="Just tell me what to do." 
                        className="task-adder" 
                        autoComplete="off" 
                        value={newTask}
                        onChange={watchTask}
                    />
                </form>
                {mytasks_converted}
            </div>
            <Footer url="https://www.linkedin.com/in/saksham-garg-a95290206/" author="saksham garg"/>
        </div>
    );
    return final_ele;
}