function findElement(arr, ele){

    // Iterative Approach
    let l = 0;
    let r = arr.length-1;
    let mid;
    console.log("");
    console.log(arr)
    while( l <= r){

        mid = l + Math.floor((r-l)/2);

        if(arr[mid] === ele){
            console.log("Element found at index : " + mid);
            return;
        }
        // if element is in left side of mid
        if(ele < arr[mid]){
            r = mid-1;
        }else{
            l = mid+1;
        }
    }

    console.log("Element not found");

}

let arr = [4,8,11,12,15,20]
let ele = 12
findElement(arr,ele);

// Complexity = O(logN)