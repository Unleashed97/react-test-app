import React from 'react'

import InputForm from './InputForm'
import TodoList from './TodoList'

function Todo(){
    return(
        <div className="todo">
            <div className="container">
                <InputForm />
                <TodoList />
            </div>
        </div>
    )
}

export default Todo