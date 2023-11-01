function findNoOfRotation(arr){

    let l = 0, r= arr.length-1, m;

    if(arr[l] <= arr[r]){
        return 0;
    }
    while( l <= r){
        m = l + Math.floor((r-l) / 2);
        
        if( m < r && arr[m] > arr[m+1]){
            return m+1;
        }

        if( m > l && arr[m] < arr[m-1]){
            return m;
        }

        if( arr[r] > arr[m]){
            r = m-1
        }else{
            l = m+1;
        }

    }
    return -1;
    
}
// let arr = [1,2,3,4,5];
let arr = [15, 18, 2, 3, 6, 12];
console.log(arr)
console.log("Array is rotated ",findNoOfRotation(arr), " times\nArray before rotation : ", arr.sort((a,b)=> a-b));
