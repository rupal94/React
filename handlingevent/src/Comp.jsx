import React, { useState } from "react";

let Comp = () =>
{
    const [bgcolor , setbg] = useState("purple");
    const [buttonstatus , afterclick] = useState("red");

    let changecolor = ()=>
    {
        setbg("red");
        afterclick("purple");
    }
    let bgBack =() =>
    {
        setbg("purple");
        afterclick("red");
    }

    return(
        <>
        <div style={{backgroundColor:bgcolor}}>
        <button onClick={changecolor} onMouseEnter={bgBack}> {buttonstatus} </button>
        </div>
        </>
    );
}

export default Comp;
