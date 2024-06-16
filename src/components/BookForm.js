import React, {useState} from 'react'

const BookForm = ({addBook}) => {
    const [value, setValue] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()

        addBook(value)

        setValue("")
    }
  return (
    <form className = "BookForm" onSubmit={handleSubmit}>
        <input type="text" className = "Book-input" value={value} 
        placeholder="Book Title?" onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className = 'Book-btn'>Add Book</button>
    </form>
  )
}

export default BookForm