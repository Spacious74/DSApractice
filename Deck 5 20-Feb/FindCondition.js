// The aim is to discover the number of pairs of indices {i, j} in two integer arrays A[] and B[] of equal size
// such that A[i] + A[j] > B[i] + B[j] and i < j .
// Time Complexity = O(NLogN)

// Equation manipulated
// (A[i] - B[i]) + (A[j] - B[j]) > 0
// We can construct a new array D = [] where we store (A[i] - B[i]),
// now we just have to confirm that D[i] + D[j] > 0 to get our answer. 


function countPairs(A,B){
    let D = []
    n = A.length;
    for(let i = 0; i < n; i++) {
        D[i] = A[i] - B[i];
    }
    console.log("");
    console.log(A,B);
    D = D.sort((a,b) => a-b);
    console.log("D = ",D)
    let count = 0;
    for(let i = 0; i < n; i++){
        if(D[i] <= 0){
            let k = findIndex(D, 0, n, -D[i] );
            count += (n-k);
        }else{
            count += ((n-i)-1); // if this doesn't work
            // count += (((n-i) * (n-i-1))/2) then use this formula instead
        }
    }
    console.log(count," pairs found ");
}
function findIndex(arr, l, r, ele){
    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] > ele){
            r = m;
        }else{
            l = m+1;
        }
    }
    return l;
}

let A = [4,8,2,6,2]
let B = [4,5,4,1,3]
// let A = [1,3,2,4]
// let B = [1,3,2,4];
countPairs(A, B);

// TIME COMPLEXITY - O(nlogn).