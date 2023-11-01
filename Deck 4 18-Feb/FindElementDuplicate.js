function findDuplicate(arr, l, r, ele){

    if(l <= r){

        let m = l + Math.floor((r-l)/2);
        if(arr[m] === ele && (arr[m+1] === ele || arr[m-1] === ele)){
            return true;
        }

        if(ele < arr[m]){
            return findDuplicate(arr, l, m-1, ele);
        }
        return findDuplicate(arr, m+1, r, ele);

    }
    return false;

}

let arr = [1,3,5,5,7,7,7,8,9];
let ele = 7;
console.log(findDuplicate(arr, 0, arr.length-1, ele));