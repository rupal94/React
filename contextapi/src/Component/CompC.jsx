import React from "react";
import { FirstName ,LastName} from "../App";

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>{(fname)=>{
                return(
                    <LastName.Consumer>{(lname)=>{
                        return <h2> Hello {fname} {lname}</h2>
                    }}
                    </LastName.Consumer>
                ) ;
            }}
            </FirstName.Consumer>
            <h2> Hello </h2>
        </>

    );
};

export default CompC;