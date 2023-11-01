
// console.log(sayhello()); // hoisting happens here

// function sayhello(){
//     console.log("hello");
// }


// console.log(sayArrow()); // In this case here hoisting not happens becuase your are calling the function.
console.log(sayArrow) ; // here hoisting happens becuase your are accessing like variable.
var sayArrow = ()=>{ // and if you declare it with 'let' or 'const' then also hoisting not happens.
    console.log("Arrow hello");
}

