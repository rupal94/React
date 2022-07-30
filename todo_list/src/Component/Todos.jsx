import React from "react";
import Todoitem from "./Todoitem";

function Todos(props) {
    return (
        <>
            <h1 className="text-center">List</h1>
            {props.TodosData.map((Todo) => {
                return <Todoitem todo={Todo} key={Todo.sno} onDelete={props.onDelete}/>;
            })
            }
        </>
    );
}

export default Todos;