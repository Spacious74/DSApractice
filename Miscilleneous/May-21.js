// Char One
// Question Name: Char One

// Problem Statement

// Antonio and his girlfriend decided to move their relationship to the next level and bought 
// a binary string S(string consisting only of characters ‘0’ and ‘1’) from a nearby string shop(name of the shop). 
// As you may have already guessed, both of them are programmers.
// A nice string is a binary string which contains at least one character ‘1’. For example ‘101100’, ‘0100’, ‘10001’ etc. 
// are nice strings.
// A substring of a string is a contiguous subsequence of that string.
// To impress his girlfriend Antonio wants to find the number of nice substrings of string S but is facing difficulties.
// Given string S, help Antonio by telling him the number of nice substrings of string S.

// Input Format

// First line contains a single binary string denoting S.
// Output Format

// Print the number of nice substrings of string S.
// Constraints

// 1<=length of S<=105
// Sample Input 1

// 0100

// Sample Output 1

// 6

// Explanation of Sample 1

// Possible nice substrings are : 01, 010, 0100, 1, 10, 100

// function countone(str){

    // let count = 0;
    // let a = 0;
    // let n = str.length;
    // while(a < n){
    //     console.log("a = ",a);
    //     if(str.substring(a,n).includes('1') == false){
    //         break;
    //     }
    //     for(let i = a; i < n; i++){
    //         if(str.substring(a, i+1).includes('1')){
    //             count+=1;
    //         }
    //     }
    //     a++;
    // }
    // console.log("Total '1' count: " + count);

// }
// let str = '0100';
// // console.log(str.substring(1,5).includes('V'));
// countone(str);



// POWERFUL TRIPLET

// Problem Statement

// Amy has an array A, of N integers. For a triplet (X, Y, Z) (1<=X<Y<Z<=N), she defines its power as: | AX – AY | * AZ.

// She wants to find the maximum possible power that a triplet can have. Since, she is busy, she asked you to help her.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 10
// 3 <= N <= 105
// 1 <= Ai <= 109
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of a single integer N.
// Second line of each test case consists of N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting maximum possible power that a triplet can have.
// Sample Input 1

// 1

// 4

// 1 2 4 3

// Sample Output 1

// 9

// Explanation of Sample 1

// If she choses the triplet (1, 3, 4), then power = | A1 – A3 | * A4 = | 1 – 4 | * 3 = 9



// function findtriplet(arr,n){


//     let max = 0;
//     arr = arr.sort((a,b)=>a-b)
    // console.log(arr);

    // let sub = Math.abs(arr[0]-arr[n-1]);
    // console.log(sub)

    // arr.pop(); arr.shift();

    // console.log(arr)

    // for(let i = 0; i<arr.length; i++){
    //     if(sub * arr[i] > max){
    //         max = sub * arr[i];
    //     }
    // }
    // console.log("max = ",max);

    // for(let i = 0; i <n ; i++){

    //     for(let j = i+1; j < n; j++){

    //         for(let k = j+1; k < n; k++){
            
    //             if(Math.abs(arr[i] - arr[j])*arr[k] > max){
    //                 max = Math.abs(arr[i] - arr[j])*arr[k]
    //                 console.log(arr[i] + " " + arr[j] + " " + arr[k]);
    //             }
    //         }
            
    //     }
    // }
    // console.log(max);
// }

// let arr = [1,2,4,3];
// let n =  arr.length;
// findtriplet(arr,n);