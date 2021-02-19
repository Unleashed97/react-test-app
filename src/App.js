import React from 'react'

import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import './scss/main.scss';

function App(){
  return(
    <div className="wrapper">
      <div className="container">
        <div className="todo">
          <h1 className="todo__title">Here's your todos</h1>
          <InputForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App