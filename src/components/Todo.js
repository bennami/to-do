import React from "react";

function Todo() {
    return(
       <div>
<ul className="list-style-type:none;">
    <li>
        <input type="checkbox"/>
        <label>first</label>
    </li>
    <li>
        <input type="checkbox"/>
        <label>second</label>
    </li>
    <li>
        <input type="checkbox"/>
        <label>third</label>
    </li>
</ul>
       </div> 
    );

}

export default Todo;