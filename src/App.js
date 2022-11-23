import React from "react"
import Overview from "./Components/Overview"
import { nanoid } from "nanoid"

export default function App () {

  const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
  const [ taskList, setTaskList ] = React.useState ([ ])

  function handleChange (event) {
      setTasks( prevTasks => {
          return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
      })
  }

  function handleClick () {
      setTaskList(prevTaskList => {
          return [...prevTaskList, tasks]
      })

  }

  return (
    <main>
      <Overview handleClick = {handleClick} handleChange = {handleChange} val = {tasks.task} />
    </main>

    
  )




}
