import React, { useEffect, useState } from "react";

const Arith = () =>
{
    const [inc,setincre] = useState(0);

    useEffect(()=>{
        alert("clicked");
    },[inc])

    return(
        <>
        <div>
            <label> Increment and decrement Counter</label>
            <h5>{inc}</h5>
            <button type="btn btn-success" onClick={()=>{setincre(inc+1)}} >Increment</button>
            <button type="btn btn-danger" onClick={()=>(setincre(inc-1))}>decrement</button>
        </div>
        </>
    );


}

export default Arith;
