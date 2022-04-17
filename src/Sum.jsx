// import React from 'react';

function Sum(a,b){
    let sum = a+b;
    return sum;
};
function Sub(a,b){
    let sum = a-b;
   return sum;
};
function Mul(a,b){
   let sum = a*b;
   return sum;
};
function Div(a,b){
    let sum = a/b;
   return sum;
};

export default Sum;

export {Sub, Mul, Div};