// 2015 - ECMAscript

//____________________________________________________________//

// Let & Const
// var             => function scoped;
// let & const     => Block scoped;

// i.e. 
// let winToday = "india";
// if(true)
// {
//     let winToday = "newzeland";
//     console.log("result of let block" ,winToday);
// }
// console.log("result of let outer block" ,winToday);

// var varwinToday = "india";
// if(true)
// {
//     var varwinToday = "newzeland";
//     console.log("result of var block" ,varwinToday);
// }
// console.log("result of var outer block" , varwinToday);

//____________________________________________________________//

// Template Literals
// const name = 'rupal';
// const string = `this is string with variable ${name}`;

// console.log(string);

//____________________________________________________________//
// Template Strings method
// const name = 'rupal';
// const lname = 'deshmukh';
// console.log(`${name}`.startsWith('r')); // check start with letter , it return true or false
// console.log(`${name}`.endsWith('l')); // check end with letter it return true or false
// console.log(`${name}`.includes('al')); // check it contain or not it return true or false
// console.log(`${name} ${lname} :`.repeat(10)); // repeat word
//____________________________________________________________//

//*****************************************Array Destructoring

// const myprogrmming = ['js','python','c','php'];
// let [top1,top2,top3,top4] = myprogrmming; // it store top1 to js , top2 to python ....
// let [top1,,,toplast] = myprogrmming; // it store top1 to js and  top4 to php only
// console.log(top1);
// console.log(toplast);

// Swap 2 value with destructoring 
// let a = 5;
// let b = 15;
// [a,b] = [b,a]; // Swap value of a and b
// console.log(`the value  of a is ${a} and value of b is ${b}`);

//*****************************************Array Destructoring
//  let bioData = {
//     name : "vinod",
//     age : 26,
//     deg : "MSC",
//     hobb : {
//         first:'playing',
//         sec : 'chess'
//     }
//  }
//  let {name,age,deg,hobb} = bioData; // here biodata.name = name , biodata.age = age, biodata.deg=deg
//  console.log(`my name is ${name} age is ${age} and deg is ${deg} and hobby is ${hobb.first}`);

//____________________________________________________________//

// Arrow Function
let a = 20;
let b = 25;

const sum = () => {return a+b};

console.log(sum());

// Object Props

// default Arguments

// Array in ES6

// New no. method 

// New Global Methods
