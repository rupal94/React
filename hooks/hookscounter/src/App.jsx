import React, { useState } from "react";
import Time from "./Time";

const App = () => {

    const state = useState;

    const [count, newCount] = useState(1);

    const IncNum = () => {
        newCount(count + 1);
    }

    return (
        <>
            <div className="container">
                <div className="inner_container">
                    <h1>{count}</h1>
                    <button className="btn btn-success" onClick={IncNum}> Click Me</button>
                    <Time/>
                </div>

            </div>
        </>);
}

export default App;