import React, { useReducer } from 'react';

import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { initialState, reducer } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
 const addItem  = (newItem) => {
   dispatch({
     type:"ADD_ITEM",
     payload: newItem
  
  })}
  const toggleDone = (toggle) => {
    dispatch({
      type: 'TOGGLE_DONE', 
      payload: toggle
    })}
  
    const clear = () => {
      dispatch ({
        type:'CLEAR_COMPLETED',
        
      })
    }
 
  return (
   <div>
<TodoForm addItem= {addItem} />
<TodoList item= {state} toggleDone = {toggleDone}/>
<button onClick = {clear}>Clear Tasks </button>
   </div>
  );
}

export default App;
