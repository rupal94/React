import React from "react";
import Images from "./Images.jsx";

function Card(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <Images imagesrc={props.imagesrc}/>
            <div className="cardinfo">
              <span className="card_category">{props.title}</span>
              <h1 className="cardTitle">{props.sname}</h1>
              <h1 className="Rating">{props.isGood}</h1>
              <a href={props.link} target="_blank">
                <button> WIKI </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Card;