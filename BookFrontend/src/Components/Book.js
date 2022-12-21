import React from 'react'
import classes from './Book.module.css'
function Book(props) {
 
  return (
    <li key={props.id} className={classes.movie} >
      <h2>Name: {props.name}</h2>
      <h3>Quantity: {props.quantity}</h3>
      <p>Price: ${props.price}</p>
      <button onClick={()=>{props.deleteBook(props.id)}}>delete</button>
    </li>
  )
}

export default Book