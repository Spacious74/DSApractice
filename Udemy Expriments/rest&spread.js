
function sumkaro(){

    console.log(arguments);
    let total = 0;
    for(let i=0;i< arguments.length; i++){
        total += arguments[i]; // arguments object is a array-like object literal but not fully array.
    }
    console.log(total);

} 

sumkaro(2,3,4);


function sumKaroRest(...a){ // here ... is said to be rest operator
    console.log(a);
    let sum = a.reduce((a,b)=>a+b);
    console.log(sum);
}
sumKaroRest(2,3,4,1);


let arr1 = [10,20,30,40];
let arr2 = arr1; // now here reference of the arr1 copied any changes 
// in arr1 will reflect to the arr2. so it is not recommended.
let arr3 = [...arr1] // here ... is said to be spread operator
arr1[1] = 12
console.log("ARR2 : ", arr2);
console.log("ARR3 : ", arr3);
