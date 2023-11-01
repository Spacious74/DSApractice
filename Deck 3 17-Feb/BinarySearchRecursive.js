function findElement(arr, l, r, ele){
    if(r >= l){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] === ele){
            return m;
        }
        if(arr[m] > ele){
            return findElement(arr, l, m-1, ele);
        }
        return findElement(arr, m+1, r, ele);
    }
    return -1;
}
let arr = [20, 12 , 8 , 15, 11, 5];
let ele =  20;
arr= arr.sort((a,b) => a-b);
console.log(arr);
console.log(ele," found at ",findElement(arr, 0, arr.length-1, ele), " index");