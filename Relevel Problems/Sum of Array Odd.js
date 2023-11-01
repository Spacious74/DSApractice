// Antonio got an array A consisting of N integers as his christmas present.Antonio likes an array if and only if the sum of
// all elements of that array is odd.

// Like Antonio likes arrays [4,1,4], [2,2,1] etc. but not arrays [4,4], [2,6,2] etc.
// Now to make array A of his likeness he can perform the operations on it :

// Operation 1:
// Remove exactly one element from the array.

// Operation 2:
// Divide every element of the array by 2.
// Given array A, print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To
// make the sum of all elements of array A odd).

// Input Format
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format
// Print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of
// all elements of array A odd).

// Sample Input - [6, 4, 10]
// Sample Output - 2
// Explanation of Sample 1
// One can perform the operations as :
// First perform operation 1 and remove the first element of the array. Array A becomes = [4 10].
// Then perform the second operation and divide each element of the array by 2. A becomes = [2 5].
// Now Antonio likes array [2 5] because the sum of all elements of this array is 7, which is odd.

function minOperations(arr) {

    let ops = 0;
    let sum = arr.reduce((a,b)=> a+b);
    
    while (sum%2 === 0 && arr.length > 0) {

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
            arr = arr.map(ele => ele/2)
            ops++;
        }

        sum = arr.reduce((a,b)=>a+b);
        console.log(arr,sum);

    }

    console.log(ops);
    return;
    
}

let arr = [4,4];
minOperations(arr);