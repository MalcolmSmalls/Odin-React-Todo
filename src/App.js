import React from "react"
import Overview from "./Components/Overview"
import { nanoid } from "nanoid"

export default function App () {

  const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
  const [ taskList, setTaskList ] = React.useState ([])

  function handleChange (event) {
      setTasks( prevTasks => {
          return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
      })
  }

  
  function handleSubmit(event){
    event.preventDefault()
    setTaskList(prevTaskList => {
      return [...prevTaskList, tasks]
  })

  }

  // function handleClick () {
  //     setTaskList(prevTaskList => {
  //         return [...prevTaskList, tasks]
  //     })
  

  // }

// const taskListCreator = taskList.map(task => <li key={task.id} id={task.id}>{task.task}</li>)

  const taskListCreator = taskList.map(task => {
    return (
      <li key={task.id} id={task.id}>{task.task}</li>
    ) 
  })
  return (
    <main>
      {taskListCreator}
      <Overview handleSubmit = {handleSubmit} handleChange = {handleChange} val = {tasks.task} />
    </main>

    
  )




}
