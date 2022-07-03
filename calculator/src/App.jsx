import React from "react";
import {add,subtract,multi,div} from "./calc";

function App() {
    return(
        <>
        <h2>add of number {add(2, 8)}</h2>
        <h2>add of number {subtract(2, 8)}</h2>
        <h2>add of number {multi(2, 8)}</h2>
        <h2>add of number {div(2, 8)}</h2>
        </>
    );
}

export default App;