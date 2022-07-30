import React ,{useContext} from "react";
import CompC from "./CompC";
import {FirstName,LastName} from "../App";

const CompB = () =>
{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (<>
    <CompC/>
    <h1>comp B {fname} {lname}</h1>
    </>);
};

export default CompB;