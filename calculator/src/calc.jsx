function add (a,b) {
    let add_number = a+b;
    return add_number;
}
function subtract (a,b) {
    let subtract_number = a-b;
    return subtract_number;
}
function multi (a,b) {
    let multi_number = a*b;
    return multi_number;
}
function div (a,b) {
    let div_number = a/b;
    div_number = div_number.toFixed(2)
    return div_number;
}


export {add,subtract,multi,div};