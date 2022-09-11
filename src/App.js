import Form from './components/Form';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GroceryList from './GroceryList';

function App() {

  // const [newItem, setNewItem] = useState('')
  // const [newCategory, setNewCategory] = useState(0)
  const [newItem, setNewItem] = useState({
    item: '',
    category: ''
  })
  const [list, setList] = useState([])
  // handleSubmit = e => {
  //   e.preventDefault()
  // }

  // handleTextChange = e => {

  // }
  const addToList = (item) => {
    let temp = [...list, item]
    setList(temp)
  }

  const submitList = (e) => {
    e.preventDefault()
    addToList(newItem.item)
  }


  return (
    <>
      <div className='container'>
        <h1>Grocery List</h1>
        {/* <Form
          handleTextChange={handleTextChange}
          category={category}
          item={item}
        /> */}

        <form className='subContainer' onSubmit={submitList}>
          <label htmlFor='category'>Category: </label>
          <input
            name='category'
            id='category'
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          // onChange={handleTextChange}
          // value={category}
          // type='number'
          />
          <br />
          <label htmlFor='item'>Item: </label>
          <input
            name='item'
            id='item'
            value={newItem.item}
            onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
          // onChange={handleTextChange}
          // value={item}
          // type='text'

          />

          <br />
          <br />
          <input type='submit' />

        </form>


      </div>
      <GroceryList list={list} />

      <div>
        {/* {console.log(list)} */}
      </div>
    </>
  );
}

export default App;
