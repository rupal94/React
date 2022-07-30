import React from "react";

function Todoitem({todo,onDelete})
{
    return(
        <div className="container">
            <h6>Sno:{todo.sno}</h6>
            <h6>Title :{todo.title}</h6>
            <h6>Desc :{todo.desc}</h6>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo.sno)}}>Delete</button>
        </div>

    );
}

export default Todoitem;