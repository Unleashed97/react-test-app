import React from "react";

function InputForm(){
    return(
        <form action="/" className="todo__form">
            <input className="todo__input" type="text" placeholder="input your todos here then hit enter" />
        </form>
    )
}

export default InputForm;