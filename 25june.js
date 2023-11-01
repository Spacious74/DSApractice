// Odd array
function noOfOperations(arr){
    let ops = 0;
    let sum = arr.reduce((a,b)=>a+b);
    while(sum%2 === 0 && arr.length > 0){
        let oddFound = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2 !== 0){
                oddFound = true;
                sum = sum - arr[i];
                arr.splice(i,1);
                break;
            }
        }
        if(oddFound){
            ops++;
        }else{
            arr = arr.map(ele => ele/2);
            ops++;
        }
        sum = arr.reduce((a,b)=>a+b);
    }
    console.log(ops);
}

let arr = [2,4,6]
noOfOperations(arr)

// function minimiseInteger(n,k){

//     let digits = n.toString().split("");
//     console.log(digits);

//     let i = 0;
//     while(k > 0 && i < digits.length){

//         if(i == 0 && digits[i] != '1'){
//             digits[i] = '1';
//             k--;
//         }else if(i > 0 && digits[i] != '0'){
//             digits[i] = '0';
//             k--;
//         }
//         i++;

//     }
//     let minimumInteger = digits.join("");
//     console.log(Number(minimumInteger));


// }

// let i = 23;
// let k = 2;
// minimiseInteger(i,k)
