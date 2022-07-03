import React from "react";

function Card(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imagesrc} alt="myPic" className="cardPic" />
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