import Form from './components/Form';
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import { supabase } from './supabaseClient';

function App() {

  // const [newItem, setNewItem] = useState('')
  // const [newCategory, setNewCategory] = useState('')
  const [newItem, setNewItem] = useState({
    name: '',
    category: ''
  })
  const [list, setList] = useState([])
  const [catList, setCatList] = useState([
    {
      'value': 1,
      'title': 'Bakery'
    },
    {
      'value': 2,
      'title': 'Baking'
    },
    {
      'value': 3,
      'title': 'Beverage'
    },
    {
      'value': 4,
      'title': 'Breakfast & Cereal'
    },
    {
      'value': 5,
      'title': 'Condiments & Spices'
    },
    {
      'value': 6,
      'title': 'Cookies, Candy & Snacks'
    },
    {
      'value': 7,
      'title': 'Frozen Foods'
    },
    {
      'value': 8,
      'title': 'Fruits & Vegetables'
    },
    {
      'value': 9,
      'title': 'Canned Goods & Soups'
    },
    {
      'value': 10,
      'title': 'Meat & Seafood'
    },
    {
      'value': 11,
      'title': 'Personal Care & Health'
    },
    {
      'value': 12,
      'title': 'Paper, Cleaning & Home'
    },
    {
      'value': 13,
      'title': 'Pet Care'
    },
    {
      'value': 14,
      'title': 'Wine, Beer & Spirits'
    }
  ])

  // handleSubmit = e => {
  //   e.preventDefault()
  // }

  // handleTextChange = e => {

  // }
  // const addToList = (item) => {
  //   let temp = [...list, item]
  //   setList(temp)
  // }
  // const addToItemList = (item) => {
  //   let temp = [...itemList, item]
  //   setItemList(temp)
  // }
  // const addToCatList = (category) => {
  //   let temp = [...catList, category]
  //   setCatList(temp)
  // }


  const submitList = (e) => {
    e.preventDefault()
    // console.log(newCategory)
    console.log(newItem)
    insertItem()
    getItems()
    // setList([...list, newItem])
    // addToList(newItem)
    // addToCatList(newCategory)
    // addToItemList(newItem)

  }

  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    const { data, error } = await supabase
      .from('item')
      .select()
    setList(data)
  }

  const insertItem = async () => {
    const { data, error } = await supabase
      .from('item')
      .insert([
        {
          category: newItem.category,
          name: newItem.name
        },
      ])

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

        <form className='subContainer'>
          <label htmlFor='category'>Category: </label>
          <select
            name='category'
            id='category'
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          // onChange={(e) => setNewCategory(e.target.value)}
          >
            <option value='' disabled={true} >Select</option>
            {catList.map((category, idx) => {
              return (
                <option key={idx} id={category.title} value={category.value}>
                  {category.title}
                </option>
              )
            })}
          </select>
          <br />
          <label htmlFor='item'>Item: </label>
          <input
            name='item'
            id='item'
            value={newItem.item}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          // onChange={(e) => setNewItem(e.target.value)}
          // onChange={handleTextChange}
          // value={item}
          // type='text'

          />

          <br />
          <br />
          <input type='submit' onClick={insertItem} />

        </form>


      </div>
      <GroceryList list={list} getItems={getItems} catList={catList} />
      {/* <GroceryList items={itemList} category={catList} /> */}

      <div>
        {/* {console.log(list)} */}
      </div>
    </>
  );
}

export default App;
