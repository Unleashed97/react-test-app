import React from 'react'

function InputForm(){
    return(
        <form className="todo__form">
            <input className="todo__input" type="text" placeholder="Input ur todo here, then tap enter" />
        </form>
    )
}

export default InputForm