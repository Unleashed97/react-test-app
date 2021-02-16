import React from 'react'

import TodoItem from './TodoItem'

function TodoList(){
    return(
        <ul className="todo__list">
            <TodoItem title="aabbccddee" index="1"/>
        </ul>
    )
}

export default TodoList