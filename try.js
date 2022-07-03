const oldarry = ["rupal","ruchita","deshmukh"];
// const newArray =  oldarry.map(function(cvalue)
// { return cvalue; })

// const newArray = oldarry.map((cvalue)=>cvalue);

const newArray = oldarry.map(function( cvalue, i, arr)
{ return i +":"+ cvalue; } )

console.log(newArray);
