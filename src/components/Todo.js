import React from "react";
import "../todo.css"

function Todo(props) {

    const items = props.items;
    const listItems = items.map( item => {
        return <div className={'list'} key={item.key}>
                <p>{item.text}jjj <span><button onClick={()=> props.deleteItem(item.key)}>X</button></span></p>

               </div>

    });
    return(
        <div className="todo-items">
        {listItems}
        </div>
    );

}

export default Todo;