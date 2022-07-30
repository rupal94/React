import React, { useState } from "react";


const Form = () => {
    const [oldname, newName] = useState("");
    const [fullName, newfullName] = useState("");

    const inputEvent = (event) => {
        newName(event.target.value);
    }

    const showName = () => {
        newfullName(oldname);
    }

    return (
        <>
            <div className="mainCard">
                <div className="subclassCard">
                <h1> hello {fullName} </h1>
                <label>Form </label>
                <div>
                    <input type="text" placeholder="Enter your name" onChange={inputEvent} />
                    <p> Typed Word : {oldname} </p>
                </div>

                <button className="btn btn-success" onClick={showName}> Click to see full name</button>
                </div>
            </div>
        </>
    );
}

export default Form;