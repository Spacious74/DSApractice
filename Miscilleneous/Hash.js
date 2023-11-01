
function findLeader(arr,n){

    let leaderArr = [];
    let max = arr[n-1];
    for(let i=n-1; i>=0 ;i--){  
        if(arr[i] >= max){
            max = arr[i];
            leaderArr.unshift(arr[i])
        }
    }
    console.log(leaderArr);

}
let arr = [16,17,17,4,3,5,2,2]
let n = arr.length;
findLeader(arr,n);