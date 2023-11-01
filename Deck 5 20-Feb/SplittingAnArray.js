function isPossible(arr, m,k){
    let tempSum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > m){
            return false;
        }
        tempSum += arr[i]
        if(tempSum > m){
            count++;
            tempSum = arr[i]
        }
    }
    count++;
    if(count <= k){
        return true;
    }else{
        return false;
    }
}

function findMinimumInMaximumSum(arr,k){

    let l = Math.max(...arr);
    let r = arr.reduce((a,b)=>a+b);
    let ans = 0;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(isPossible(arr, m,k)){
            ans = m;
            r = m-1;
        }
        else{
            l = m+1;
        }
    }
    console.log(ans);

}
let arr = [1,2,3,4]
let k = 3;
findMinimumInMaximumSum(arr,k);