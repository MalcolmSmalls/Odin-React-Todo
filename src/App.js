import React from "react"
import Overview from "./Components/Overview"
import { nanoid } from "nanoid"
import './App.css'

export default function App () {

  const [ tasks, setTasks ] = React.useState( () => ({task: "", id: ""}))
  const [ taskList, setTaskList ] = React.useState ([])
  const [ editMode, setEditMode ] = React.useState ({on: false, editedKey: ""})

  function handleChange (event) {
      setTasks( prevTasks => {
          return {...prevTasks, [event.target.name]: event.target.value, id: nanoid()}
      })
  }

  const taskObj = {task: "", id: ""}
  
  function handleSubmit(event){
    event.preventDefault()
    setTaskList(prevTaskList => {
      return [...prevTaskList, tasks]
  })
    setTasks( () => (taskObj) )

  }

  function handleDelete (event, key) {
    setTaskList(prevTaskList => {
      let newArr = []
      prevTaskList.forEach(note =>{ 
        if(key !== note.id){
          newArr.push(note)
        }
      })
      return newArr
    })
  }


  function handleEdit (event, key) {
      taskList.map ( note => {
        if(note.id === key){
          console.log(note)
          setTasks(note)
          setEditMode(prevEditMode => {
            return {on: !prevEditMode.on, editedKey: key }
          })
        }
      })
  }

  function handleResubmit(event){
    event.preventDefault()
    // console.log(editMode)
    // console.log(tasks)
    // console.log(taskList)
    setTaskList(prevTaskList => {
      let newArr = []
      prevTaskList.forEach( note => {
        if(note.id === editMode.editedKey ){
          newArr.push({task: tasks.task, id: editMode.editedKey})
        }else{
          newArr.push(note)
        }
      })
      return newArr
    })

    setTasks(taskObj)
    setEditMode({on: false, editedKey: ""})

  }

  const taskListCreator = taskList.map((task, index) => {
    return (
      <li key={task.id} id={task.id}>{index+1}. {task.task} <span onClick = {(event)=>handleEdit(event, task.id)}>EDIT | </span> <span onClick = {(event)=>handleDelete(event, task.id)}>DELETE</span></li>
    ) 
  })
  return (
    <main>
      {taskListCreator}
      <Overview handleSubmit = {handleSubmit} handleChange = {handleChange} val = {tasks.task} editMode = {editMode} handleResubmit = {handleResubmit} />
    </main>

    
  )




}
