function searchElement(arr,ele){

    let l = 0,r = arr.length-1,m ;
    while(l <= r){
        m = l + Math.floor((r-l)/2);
        if(arr[m] === ele){
            return m;
        }
        if(arr[m] > arr[l]){
            // left part is sorted
            if(ele >= arr[l] && ele <= arr[m]){
                r = m-1;
            }else{
                l = m+1
            }

        }else{
            // right part is sorted
            if(ele > arr[m] && ele <= arr[r]){
                l = m+1;
            }else {
                r = m-1;
            }
        }        
    }
    return "Not found";

}
console.log("");
let arr = [50, 60, 90, 100, 20, 30, 40];
let ele = 30;
console.log(searchElement(arr,ele));
