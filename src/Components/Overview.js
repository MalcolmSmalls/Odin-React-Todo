import { nanoid } from "nanoid"
import React from "react"
import App from "../App"

export default function Overview (props) {

    

    return (
        <div className = "submit-container">
            <input 
                type = "text" 
                name = "task"
                onChange = {props.handleChange}
                value = {props.val}
            />
            <button
                onClick = {props.handleClick}>
                    Submit Task
                </button>
        </div>
    )


}