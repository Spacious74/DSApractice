function findSubset(arr,sum){

    let l = 0;
    let r = arr.length-1;
    let m;

    while(l <= r){

        console.log("While running..")

        m =  l + Math.floor((r-l) / 2);
        if(arr[m]+arr[m-1] === sum){
            return [arr[m-1], arr[m]];
        }else if(arr[m]+arr[m+1] === sum){
            return [arr[m], arr[m+1]];
        }

        if(arr[m]+ arr[m-1] < sum || arr[m] + arr[m+1] < sum){
            l = m+1
        }else{
            r= m-1
        }

    }

}
let arr = [1,3,4,5,7,10,11,12];
let sum =23;
console.log(arr);
console.log(findSubset(arr,sum) , " whose sum is : ", sum);
