import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux/reducers/todoSlice'

const App = () => {

  //use ref sey ha kese bhi elemt ko refrence dettey hey 
  const todoVal = useRef()
  let [editValue, seteditValue] = useState()



  // dispatch
  const dispatch = useDispatch()

  //selector
  const selector = useSelector(state => state.todos.todo);
  console.log(selector);


  const addTodoInRedux = (event) => {
    event.preventDefault()
    console.log("todo added", todoVal.current.value)
    dispatch(addTodo({
      title: todoVal.current.value
    }))
  }


  const deleteItemFromRedux = (index) => {
    console.log("delete item", index);
    dispatch(removeTodo({
      index
    }))

  

  }

  const edititemrdeux = (index)=>{
    // console.log("edititemrdeux", index)
    seteditValue("rehbar"+index)
    console.log(editValue)
  }


  return (
    <>
      <form>
        <input type="text" ref={todoVal} />
        <button onClick={addTodoInRedux}>add Todo</button>

      </form>
      <ul>
        {selector.length > 0 ? selector.map((item, index) => {
          return <li key={item.id}>{item.title}
            <button onClick={() => deleteItemFromRedux(index)}>delete</button>
            <button onClick={()=> edititemrdeux(index)}>Edit</button>
            </li>
        }) : <h1>No data found</h1>}
      </ul>
    </>
  )
}

export default App
