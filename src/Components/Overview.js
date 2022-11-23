import { nanoid } from "nanoid"
import React from "react"

export default function Overview (props) {
    const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
    console.log(tasks)


    function handleChange (event) {
        setTasks( prevTasks => {
            return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
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
        </div>
    )


}