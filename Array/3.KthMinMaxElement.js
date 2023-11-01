function findKthMinMax(arr,k){

    // to remove the duplicate elements from the array
    
    let uniqueArr = Array.from(new Set(arr));

    // sort the array

    uniqueArr = uniqueArr.sort((a,b) => a-b);

    // taking length of the array

    let n = uniqueArr.length;

    // returning [min, max] elements by calculating -
    // our trial array becomes - [1,2,3,4,5,6,7,8]
    // k is 3rd min and max 
    // so k-1 = 2 meaning uniqueArr[2]=3 which is true third smallest element is 3
    // similar n-k = 8-3 = 5 so uniqueArr[5] = 6 which is third largest element.

    return [uniqueArr[k-1], uniqueArr[n-k]];

}
let arr = [2,3,1,4,5,6,8,7];
// let arr = [3,3,3,3,4,2,2,2,1,1,1];
let k = 2;
console.log(arr);
console.log(k," smallest element : " + findKthMinMax(arr,k)[0]);
console.log(k," largest element : " + findKthMinMax(arr,k)[1]);