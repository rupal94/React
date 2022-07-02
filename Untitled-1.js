import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//_____________Write syntex in React by 3 ways ________________________//
// ReactDOM.render(<h1>hello</h1> , document.getElementById("root"));
// ReactDOM.render('what to show','where to show', 'callback'  )

// ReactDOM.render(React.createElement("h1",{style:{ color:"red"} },"hello2"),document.getElementById("root"));
// React.createElement("type","props","children")

// var h1 = document.createElement("h1");
// h1.innerHTML = "hello3";
// document.getElementById("root").appendChild(h1);

//_____________Write Expression in React________________________//
// const first_series = "dark";

// ReactDOM.render(
//     <>
//     <h1>my fav series is</h1>
//     <ol>
//         <li>my series is {first_series}</li>
//         <li>my series is name 2</li>
//     </ol>
//     </>,
//     document.getElementById("root")
// )
//* we can use expression only not statement like if for another condition

//_____________Template literals in React________________________//
// const fname = 'rupal';
// const lname = 'deshmukh';


// ReactDOM.render(
//     <>
//     {/* <h1>my name is {fname} {lname}</h1> */}
//     {/* <h1>my name is {fname +" "+ lname}</h1> */}
//     {/* template literals are summoned by ` ` */}
//     <h1>{`my name is ${fname} and last name is  ${lname}`}</h1>
//     </>,
//     document.getElementById("root")
// )

// _____________Show date and time in React________________________//
let Tdate = new Date().toLocaleDateString();
let Ttime = new Date().toLocaleTimeString();
let sname = "Deshmukh";

ReactDOM.render(
    <>
    <h1>Date is = {Tdate}</h1>
    <h1>Time is = {Ttime}</h1>
    <h2>Rupal {sname}</h2>
    </>
    , document.getElementById("root")
)

// _____________JSX Attributes in React________________________//
// const fname = 'rupal';
// const img1 = "https://picsum.photos/300/300";
// const img2 = "https://picsum.photos/300/300";
// const link = "https://www.facebook.com/";


// ReactDOM.render(
//     <>
//     <h1> my name is <span contentEditable = "true">{fname}</span></h1>
//     <img src="https://picsum.photos/200/300" alt="randomImages"></img>
//     <img src={img1} alt="randomImages"></img>
//     <a href={link} target="_blank"> facebook link</a>
//     <button className="btn btn-success">submit</button>
//     <button className="btn btn-danger">cancel</button>
//     </>,
//     document.getElementById("root")
// )

