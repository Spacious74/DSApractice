// Nice Subsequence
// Question Name: Nice Subsequence
// Problem Statement
// Given an array arr consisting of N integers.
// arr subsequence is a sequence that can be derived from 
// the given array by deleting zero or more elements(not all) without 
// changing the order of the remaining elements.
// arr nice subsequence is a subsequence of array arr in which 
// the difference between any two elements equals 
// the difference between their original indices in array arr.
// More formally a subsequence [Ai1 Ai2 Ai3 … AiL] of array arr is nice if for any 1<=p,q<=L, Aip-Aiq = ip-iq holds.
// Now you have to find the largest possible length of a nice subsequence of array arr.

// Input Format
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array arr.

// Output Format
// Print the largest possible length of a nice subsequence of array arr.

// Constraints
// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1
// 6
// 2 1 4 10 7 7
// Sample Output 1
// 3

// Explanation of Sample 1
// arr possible nice subsequence of length 3 is [A1 A3 A6] = [2 4 7]


// function niceSubsequence(arr){


//     // let s = new Set();
//     let s = [];
//     for(let i = 0; i<arr.length; i++){

//         for(let j = i+1; j < arr.length; j++){

//             if(arr[j] - arr[i] === j - i){
//                 s.push(arr[i],arr[j]);
//             }

//         }

//     }
//     console.log(s);
//     let nice = new Set(s);
//     console.log(nice);
//     console.log(nice.size);


// }
// let arr = [2,1,4,10,7,7];
// niceSubsequence(arr);

// Fill array
// Question Name: Fill array

// Problem Statement

// Antonio is given an array arr consisting of N positive integers.

// Now consider another array B. Initially array B has N elements and all these elements are equal to zero. Antonio wants to fill array B. For this he can perform the below operations on it several times:

// Choose a prefix of array B and increase all the elements in this prefix by 1.
// More formally choose a 1<=P<=N, and make Bi = Bi+1 for all 1<=i<=P.
// Antonio wants elements of array B to be less or equal to elements of array arr, and hence he performs the operation such that after all the operations are done, Bi<=Ai holds for all 1<=i<=N.

// Among all the arrays B that Antonio can form using the given operations, find the maximum possible sum of elements of array B.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array arr.
// Output Format

// Among all the arrays B that Antonio can form using the given operations, print the maximum possible sum of elements of array B.
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 3

// 2 3 1

// Sample Output 1

// 5

// Explanation of Sample 1

// Antonio can perform the operations as :

// Operation 1 :
// Select P = 2, B becomes [1 1 0]
// Operation 2 :
// Select P=3, B becomes [2 2 1]
// Now B1<=A1, B2<=A2 and B3<=A3 holds, and the sum of all elements of array B = 2+2+1 = 5

// function maxSum(arr) {
//     let n = arr.length;
//     let b = new Array(n).fill(0);
//     for (let i = 0; i < n; i++) {
//         let x = Math.min(arr[i], i + 1);
//         b[x - 1]++;
//     }
//     let ans = 0;
//     let sum = 0;
//     for (let i = n - 1; i >= 0; i--) {
//         sum += b[i];
//         ans += Math.min(sum, arr[i]);
//     }
//     return ans;
// }

// let arr = [2,3,1];
// console.log(maxSum(arr));


function fillArr(arr){

    let aLen = arr.length;
    let B = new Array(aLen).fill(0);
    

    let zeroFound = true;
    let i = 0;
    while(i < aLen && zeroFound == true){

        let val = arr[i];
        for(let k = 0; k<val; k++){
            B[k] += 1;
        }
        console.log(B);
        zeroFound = B.includes(0);
        console.log(zeroFound)
        i++;
    }

    let sum = B.reduce((a,b)=>a+b);
    console.log(sum);


}

let arr= [2,3,1]
fillArr(arr);
