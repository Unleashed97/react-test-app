import React from 'react';

import TodoItem from './TodoItem';

function TodoList(){
    return(
        <div className="todo__list-wrapper">
            <ul className="todo__list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
            <div className="text-center">
                <button className="todo__clear-list-btn">Clear list</button>
            </div>
        </div>
    )
}

export default TodoList