// Program to find the first and last occurences of an element..

function findFirstAndLastOccurence(arr, ele) {
    let l = 0,m;
    let r = arr.length - 1;
    let result = " not found";
    console.log(arr);
    while (l <= r) {

        m = l + Math.floor((r - l) / 2);

        if (arr[m] === ele) {
            result = m;
            r = m - 1;
        }
        if (ele > arr[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = arr.length - 1;
    let resultRight = " not found";

    while (l <= r) {

        m = l + Math.floor((r - l) / 2);

        if (arr[m] === ele) {
            resultRight = m;
            l = m + 1;
        }
        if (ele < arr[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return [result, resultRight]; // element found at index 'result'

}
let arr = [2,5,8,10,10,10,10,10,11,15];
// let arr = [2, 5, 8, 11, 15];
let num = 12;
let result = findFirstAndLastOccurence(arr, num);
console.log("First occurrence of ", num, " is at index : ", result[0])
console.log("Last occurrence of ", num, " is at index : ", result[1])


// const readline = require('readline');

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question("Enter a sorted array : ", (arr)=>{
//     arr = arr.split(',').map(Number);
//     console.log(arr);
//     rl.question("Enter element to find the occurrence :",(num)=>{
//         num = Number(num);
//         console.log("Occurence of ", num, " is at index : ", findFirstAndLastOccurence(arr,num));
//         rl.close();
//     })
// })