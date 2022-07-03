import React from "react";

function Images(props) {
    return (
        <img src={props.imagesrc} alt="myPic" className="cardPic" />
    );
}

export default Images;