import React from 'react'
import Book from './Book'
import classes from './BookList.module.css'
function BookList(props) {
  return (
    <ul className={classes['movies-list']}>
    {props.books.map((book) => (
      <Book
        id={book.id}
        name={book.name}
        quantity={book.quantity}
        price={book.price}
        deleteBook={props.deleteBook}
      ></Book>
     
    ))}
  </ul>
  )
}

export default BookList