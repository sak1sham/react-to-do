import React from "react";

export default function Footer(props){
    return (
        <div className="footer">
            Made with <i className="fa fa-heart love-icon"></i> by <a href={props.url} className="author-name" target="_blank" rel="noopener noreferrer">{props.author}</a>
        </div>
    )
}