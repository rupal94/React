import React from "react";

const SlotM = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;    

    if ((x === y && y === z)) {
        return (
            <>
                <div className="innerslot">
                    <h1>{x}{y}{z}
                    </h1>
                    <h1>This is Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="innerslot">
                    <h1>{x}{y}{z}
                    </h1>
                    <h1>This is Not Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }
}

export default SlotM;