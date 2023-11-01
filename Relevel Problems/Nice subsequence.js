// function largestNiceSubsequenceLength(arr) {
//   const n = arr.length;
//   const dp = new Array(n).fill(1);

//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       const diffIndices = Math.abs(arr[i] - arr[j]);
//       const diffElements = Math.abs(i - j);
//       if (diffIndices === diffElements) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   console.log(dp);
//   return Math.max(...dp);
// }

// // Test the function
// const arr = [2, 1, 4, 10, 7, 7];
// // const arr = [3,5,8,13];
// const largestLength = largestNiceSubsequenceLength(arr);
// console.log(largestLength);





function findLargestNice(arr){
  let n = arr.length;
  let db = new Array(n).fill(1);
  for(let i = 1; i < n; i++){
    for(let j = 0; j < i; j++){

      let diffElement = Math.abs(arr[i]-arr[j])
      let diffInd = Math.abs(i-j);
      if(diffElement === diffInd){
        db[i] = Math.max(db[i], db[j]+1);
      }

    }
  }
  return Math.max(...db);
}

let arr = [2,1,4,10,7,7];
// let arr = [3,5,8,13];
let results = findLargestNice(arr);
console.log((results === 1) ? 0 : results);