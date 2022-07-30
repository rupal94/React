import React, { useState } from "react";

let newtime = new Date().toLocaleTimeString();
const Time =()=>
{
    const [currTime,setTime] = useState(newtime);

    return(
        <>{currTime}</>
    );
}

export default Time;