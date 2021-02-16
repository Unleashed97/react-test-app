import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoItem(){
    return(
        <li className="todo-item">
            <span className="todo-item__checkbox">
                <input type="checkbox"/>

            </span>
            <p className="todo-item__text">Here is ur todo</p>
            <span className="todo-item__manage">
                <button className="todo-item__manage-edit">
                    <FontAwesomeIcon icon="pen" />
                </button>
                <button className="todo-item__manage-remove">
                    <FontAwesomeIcon icon="trash"/>
                </button>
            </span>
        </li>
    )
}

export default TodoItem;