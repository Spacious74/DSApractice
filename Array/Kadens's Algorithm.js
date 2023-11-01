//  Largest contigous subarray's maximum sum

function largestSum(arr){

    let n = arr.length;
    let sum = arr.reduce((a,b)=> a+b)
    console.log(sum);
    let maxSum = -Infinity;
    let currSum = 0;
    for(let i = 0; i < n; i++){

        currSum += arr[i];
        maxSum = Math.max(maxSum, currSum);
        currSum = (currSum < 0)? 0 : currSum;

    }
    console.log(maxSum);

}
// let arr = [9, -51, -20, -13, -51, 40, -21, 75, -24, 29, -86, 
//     5, -38, 15, 48, -87, -9, 42, 39, 64, 47, -63, 22, -81, -20, -100, 28];
let arr = [-1,-2,-3,-4]
largestSum(arr);