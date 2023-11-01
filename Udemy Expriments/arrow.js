// this.name = "Global vishal"
// let obj = {
//     name : "vishal",
//     test : ()=>{
//         name = "testVishal"
//         console.log(this.name) // here this.name always refers to the
//         // windows object or global object
//     }
// }

// obj.test();

/* In traditional */

name = "Global name";
const nameGiver = (name)=>{ // if you make it arrow function, shows error
    this.name = name;
    this.showName = function(){
        console.log(this.name)
    }
}

let obj1 = new nameGiver("Ram");
let obj2 = new nameGiver("Shyam");
let obj3 = new nameGiver("Hari");

obj1.showName(); // "Ram"
obj2.showName(); // "Shyam"
obj3.showName(); // "Hari"
