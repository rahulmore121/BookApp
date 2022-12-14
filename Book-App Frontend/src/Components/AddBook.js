import React ,{useRef}from 'react'
import classes from './AddBook.module.css'
function AddBook(props) {

  const name = useRef('');
  const quantity = useRef('');
  const price = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const book = {
      name: name.current.value,
      quantity: quantity.current.value,
      price: price.current.value,
    };

    props.onAddBook(book);

  }



  
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='text' id='title' ref={name} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Quantity</label>
        <input type='text' id='title' ref={quantity} />
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Price</label>
        <input type='text' id='date' ref={price} />
      </div>
      <button>Add Book</button>
    </form>
  )
}

export default AddBook