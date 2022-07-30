import React from "react";
import SlotM from "./Slot";

const App = () => {
    return (
        <>
            <h1>Welcome to <span style={{ fontWeight: "bold", color: "red" }}>Slot Machine</span></h1>
            <div className="slotmachine">
                <SlotM x="1" y="1" z="1"/>
                <SlotM x="1" y="2" z="1"/>
                <SlotM x="1" y="1" z="3"/>
            </div>
        </>
    );
}

export default App;