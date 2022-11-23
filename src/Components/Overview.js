import { nanoid } from "nanoid"
import React from "react"

export default function Overview (props) {
    // const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
    // const [ taskList, setTaskList ] = React.useState ([ ])

    // function handleChange (event) {
    //     setTasks( prevTasks => {
    //         return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
    //     })
    // }

    // function handleClick () {
    //     setTaskList(prevTaskList => {
    //         return [...prevTaskList, tasks]
    //     })

    // }

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