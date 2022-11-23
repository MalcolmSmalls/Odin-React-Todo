import { nanoid } from "nanoid"
import React from "react"

export default function Overview (props) {
    const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
    const [ taskList, setTaskList ] = React.useState ([ ])
    // console.log(tasks)
    console.log(taskList)

    function handleChange (event) {
        setTasks( prevTasks => {
            return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
        })
    }

    function handleClick () {
        // const newArr = []
        // newArr.push(tasks)
        setTaskList(prevTaskList => {
            return [...prevTaskList, tasks]
        })

    }

    return (
        <div className = "submit-container">
            <input 
                type = "text" 
                name = "task"
                onChange = {handleChange}
                value = {tasks.task}
            />
            <button
                onClick = {handleClick}>
                    Submit Task
                </button>
        </div>
    )


}