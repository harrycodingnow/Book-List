import React, {useState} from 'react'

const EditBook = ({editBook, task}) => {
    const [value, setValue] = useState(task.task)
    
    const handleSubmit = e => {
        e.preventDefault()

        editBook(value, task.id)

        setValue("")
    }
  return (
    <form className = "BookForm" onSubmit={handleSubmit}>
        <input type="text" className = "Book-input" value={value} 
        placeholder="Update Book?" onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className = 'Book-btn'>Update Book</button>
    </form>
  )
}

export default EditBook