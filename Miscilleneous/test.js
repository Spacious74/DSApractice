// const readline = require('readline');

// const r1 = readline.createInterface({
// 	input : process.stdin,
// 	output : process.stdout
// });

// // r1.question('What is your name ?', (name)=>{
// // 	r1.question("What is your age ?", (age)=>{
// //         console.log("Hello ", name, age, " years old");
// //         r1.close();
// //     })
// // });

// r1.question('Enter array of 5 elements (comma separated): ', (input) => {
//     let arr = input.split(',').map(Number);
//     console.log('Aapka array: ');
//     console.log(arr);
//     r1.close();
// });



function sortArray(arr) {
    return arr.sort((a,b)=> a-b);
}

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter array to sort :", (input)=>{
    let arr = input.split(",").map(Number);
    console.log("Array : ",arr);
    console.log("Sorted array : ",sortArray(arr));
    rl.close();
})