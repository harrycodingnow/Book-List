import React, {useState} from 'react'
import BookForm from './BookForm.js'
import BookList from './BookList.js'
import EditBook from './EditBook.js'
import ViewBooks from './ViewBooks.js'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const BookWrapper = () => {
    const [showBooks, setShowBooks] = useState(false);

    const handleViewBooks = () => {
      setShowBooks(!showBooks);  
    };

    const [books, setBooks] = useState([])

    const addBook = book => {
        setBooks([
            ...books, 
            {id: uuidv4(), task: book, 
        completed: false, isEditing: false}])
        console.log(books)
    }

    const toggleComplete = id => {
            setBooks(books.map(book => book.id === id ? 
            {...book, completed: !book.completed} : book))
    }

    const deleteBook = id => {
        setBooks(books.filter(book => book.id !== id))
    }

    const editBook = id => {
        setBooks(books.map(book => book.id === id ? 
        {...book, isEditing: !book.isEditing} : book))
    }

    const editTask = (task, id) => {
        setBooks(books.map(book => book.id === id ? 
        {...book, task, isEditing: !book.isEditing} : book))
    }
  return ( 
    <div className = "BookWrapper">
        <h1>Harry's Book List!</h1>
        <BookForm addBook={addBook} />
        {books.map((book, index) => (
            book.isEditing ? (<EditBook editBook={editTask} task={book}/> ) : (<BookList task={book} key={index} toggleComplete={toggleComplete} deleteBook={deleteBook} editBook={editBook}/>)
        ))}
        
        <div>
      <button className="Book-btn" onClick={handleViewBooks}>
        {showBooks ? 'Hide Books' : 'View All Books'}
      </button>
      <h2 style={{ color: '#1A1A40' }}>hi</h2>
      {showBooks && books && books.length > 0 && (
        <div>
          {books.map((book, index) =>
             (
              <ViewBooks
                key={index}
                task={book}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
      )}
      {showBooks && (!books || books.length === 0) && (

        <p style={{ color: 'white' }}>No books to display.</p>
      )}

    </div>

        </div>
        
  )
}

export default BookWrapper