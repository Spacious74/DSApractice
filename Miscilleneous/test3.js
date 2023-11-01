
function findMaximumSum(arr,k){

    arr = arr.sort((a,b)=>a-b);
    let n = arr.length;

    let sum = arr.reduce((sum,ele)=>sum+ele)
    
    let startKSum = 0;
    for(let i =0; i<k; i++){
        startKSum += arr[i];
    }

    let endKSum = 0;
    for(let i = k; i<n ; i++){
        endKSum += arr[i];
    }

    let result;
    result = Math.max(Math.abs(startKSum - (sum - startKSum)), 
    Math.abs(endKSum - (sum - endKSum)));

    console.log(result);

}

let arr = [18, 4, 15, 12, 10 ];
let k = 2;
findMaximumSum(arr,k)