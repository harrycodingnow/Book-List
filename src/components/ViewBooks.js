import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ViewBooks = ({task, toggleComplete, deleteBook, editBook}) => {
  return (
    <div className = "BookList">
     <p onClick= {() => toggleComplete(task.id)} className = {`${task.completed ? 'completed': ""
     }`}>{task.task}</p>



    </div>
  )
}

export default ViewBooks