import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TodoItem(props){
    return(
        <li className="todo__item">
            <span className="todo__check-block">
                <span className="todo__item-count">{props.index}</span>
                <input className="todo__checkbox" type="checkbox" />
                <p className="todo__item-title">{props.title}</p>
            </span>

            <span className="todo__item-management">
                <span className="todo__edit">
                    <FontAwesomeIcon icon="pen"/>
                </span>
                <span className="todo__remove">
                    <FontAwesomeIcon icon="trash"/>
                </span>
            </span>
        </li>
    )
}

export default TodoItem