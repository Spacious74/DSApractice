// let sum = 0; 
// for (let i = 0, j = 0; i < 5 & j < 5; ++i, j = i +1) {
//     sum += i; 
// }
// console.log(sum); // 6



// let a,b,c,d; 
// a=b=c=d=20;
// a+=b-=c*=d/=20 
// console.log(a+" "+b+" "+c+" "+d); // 20   0   20   1



// let x = 2; 
// let y = 0; 
// for (; y<10; ++y) {
//     if (y% x == 0) {
//         continue; 
//     }
//     else if (y == 8) {
//         break; 
//     }
//     else {
//         console.log(y + " "); // 1 3 5 7 9 
//     } 
// }



// const [a,...b, c] = [11, 12, 13, 14, 15];  // error
// console.log(a); 
// console.log(b);



// let age = 30, counter = 0, max = 100; 
// let result = age; 
// while(counter <= max) { 
//     let half = Math.floor((counter + max) / 2); 
//     if(half*half <= age) { 
//         result = half;
//         counter = half + 1; 
//     } else { 
//         max = half - 1;
//     }
// } 
// console.log(result); // 5



// ( function(){ 
//     var age = rollNumber = 25; 
// })();
// console.log((typeof age !== 'undefined')); // false
// console.log((typeof rollNumber !== 'undefined')); // true



// function checkPattern() { 
//     const str = "Hello World!"; 
//    const pattern = /x57/g;
//    const result = str.match(pattern); 
//    console.log(result); 
// } 
// checkPattern();



// const x = "ITI"; 
// const y = "GOVT"; 
// const o=y.concat(x); 
// console.log(o);



// const store = new Set(); 
// const age = [15, 18, 21, 25]; 
// store.add(age); 
// console.log(store)
// age[1] = 30; 
// store.forEach(e => console.log(e)); // 15 30 21 25


// const person = {
//     name : "Joe bob", 
//     user : function() { 
//         const name = "Wilson";
//         const self = this; 
//         console.log(this.name); 
//         console.log(self.name); 
//     } 
// }; 
// person.user(); // Joe bob Joe bob