// Problem Statement

// Antonio got an array A consisting of N integers as his christmas present.

// Antonio likes an array if and only if the sum of all elements of that array is odd. 
// Like Antonio likes arrays [4,1,4], [2,2,1] etc. but not arrays [4,4], [2,6,2] etc.

// Now to make array A of his likeness he can perform the belows operations on it :

// Operation 1:
// Remove exactly one element from the array.
// Operation 2:
// Divide every element of the array by 2.
// Given array A, print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format

// Print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 3

// 6 4 10

// Sample Output 1

// 2

// Explanation of Sample 1

// One can perform the operations as :

// First perform operation 1 and remove the first element of the array. Array A becomes = [4 10].
// Then perform the second operation and divide each element of the array by 2. A becomes = [2 5].
// Now Antonio likes array [2 5] because the sum of all elements of this array is 7, which is odd.

// function findOperations(arr, n) {
//     let sum = arr.reduce((a, b) => a + b);
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         let tempArr = [...arr];

//         tempArr.splice(i, 1);
//         sum = tempArr.reduce((a, b) => a + b);
//         if (sum % 2 !== 0) {
//             break;
//         }else{
//             count = 0;
//         }

//         console.log(tempArr);
//         tempArr = tempArr.map((a) => a / 2);
//         sum = tempArr.reduce((a, b) => a + b);
//         count += 2;
//         console.log(sum)
//         if (sum % 2 !== 0) {
//             break;
//         }else{
//             count = 0;
//         }
//     }
//     console.log(count);
// }
// let arr = [6,4,10];
// let n = arr.length;
// findOperations(arr, n);

// Minimize the integer

// Problem Statement

// Antonio got a very large integer as his christmas present from his parents. Antonio does not like large integers and hence decided to change a few digits of this integer and make it as small as possible.

// But changing too many digits will make Antonio’s parents sad. More formally if Antonio changes more than K digits of the integer, his parents will become sad. Antonio does not want that to happen and hence will change at most K digits of the given integer.

// Also if the final integer contains any leading zeroes, Antonio’s parents again become sad. So Antonio will perform the K changes in such a way that the final integer does not contain any leading zeroes.

// Given the integer Antonio got and K(maximum number of changes Antonio can perform), print the minimum integer that Antonio can get.

// Input Format

// First line contians a single integer denoting the integer Antonio got as his christmas present.
// Next line contains a single integer denoting K.

// Output Format

// Print the minimum integer that Antonio can get.
// Constraints

// 1<=number of digits in the integer<=10^5
// 1<=K<=number of digits in the integer
// Its guaranteed that the given integer does not contain any leading zeros.

// Sample Input 1

// 2399

// 2

// Sample Output 1

// 1099

// Explanation of Sample 1

// Antonio can change the first digit to ‘1’ and change the second digit to ‘0’. It can be proved that 1099 is the minimum possible integer that Antonio can get.

function minimiseTheInteger(integer, op) {
  let intArr = String(integer).split("");
  console.log(intArr);

  for (let i = 0; i < op; i++) {
    if (i == 0) {
      intArr[i] = "1";
    }
    if (i == intArr.length - 1) {
      break;
    }
    if (i != 0) {
      intArr[i] = "0";
    }
  }
  console.log(intArr);
  console.log(Number(intArr.join("")));
}
let integer = 2399;
let op = 2;
minimiseTheInteger(integer, op);
