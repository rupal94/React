import React, { useState } from "react";
import "./index.css";
import pt from 'prop-types';

// let App = (props) => {
//   let newTime = new Date().toLocaleTimeString(); // define date time for initial value
//   const [currentTime, SetTime] = useState(newTime); // set state 
//   const [count, setfirst] = useState(0); // set state 
//   const likes = () => {
//     SetTime(newTime);
//     setfirst(count + 1);
//   };

//   setInterval(() => {
//     return(<>
//       <h1> {newTime}</h1>
//       </>);
//   }, );

//   return (
//     <>
//       <h1 className="namecard">
//         Name: {props.name}<br />
//         class: {props.rollno}<br />
//         Access child : {props.children}<br />
//         <button className="btn btn-danger" onClick={likes}>{count} Likes</button>
//         <br />
//       </h1>
//       <h1>Time : {currentTime}</h1>
//     </>
//   );
// }

// App.propTypes = {
//   name: pt.string.isRequired, // Type checking in react
// }
// App.defaultProps = {
//   name: "default name", // assign default value in react
// }

export default App;