// let a = [1,2,3];
// let  b = [1,2,3];
// console.log(a == b); // false
// console.log(a === b); // false

// let a ,b;  
// console.log(a == b); // true
// console.log(a === b); // true

// let z = [1,2,3,4]
// console.log(...z); // 1 2 3 4


// console.log(typeof NaN) // number
// console.log(NaN + 2); // NaN

// let a = 10 - - 10;
// console.log(a); // 20


// const set = new Set([1,2,3,4,4,2]);
// console.log(set); // {1,2,3,4}

// let obj = {name : "Vishal"};
// console.log(delete obj.name); // true

// let obj = {name : "Vishal"};
// console.log(delete obj); // false;

// let arr = ["Vishal", "Anupam", "Ashneer"]
// let [y,,z] = arr;
// console.log(y,z); // "Vishal" "Ashneer"

// const obj = {name: "Vishal", age: 19};
// print name without . operator
// ({name:n,age:a} = obj);
// console.log(n,a);
//  or 
// const {name,age} = obj;
// console.log(name,age);


// let obj1 = {name: "Mercedes", power: 786, trans: "auto", seatingCapacity: 7 }
// let obj2 = {type: "electric", seatingCapacity: 5};
// // merge both objects together
// obj1 = {...obj1,...obj2};
// console.log(obj1);


// let name = "Vishal"
// console.log(name()); // error: name is not a function

// let a = false || {} || null;
// console.log(a); // {}

let a = "Vishal";
let b = "Visha";
console.log(a == b);