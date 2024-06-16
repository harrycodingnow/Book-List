import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const BookList = ({task, toggleComplete, deleteBook, editBook}) => {
  return (
    <div className = "BookList">
     <p onClick= {() => toggleComplete(task.id)} className = {`${task.completed ? 'completed': ""
     }`}>{task.task}</p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick ={() => editBook(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick ={() => deleteBook(task.id)}/>

      </div>

    </div>
  )
}

export default BookList