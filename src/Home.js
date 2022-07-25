import React from "react"
import "./styles.css";

export default function Home(props){
    return (
        <div>
            Hi, my name is saksham garg
            <span className={props.menu.menuName} onClick={props.menu.menuEffect}>{props.menu.menu}</span>
        </div>
    );
}