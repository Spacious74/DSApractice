function findSubArraywithGivenSum(arr, givenSum){

    console.log("");
    let prefixSum = 0;
    let m = new Map();
    let start = 0, end = -1;
    for(let i = 0; i < arr.length; i++){
        prefixSum += arr[i];
        let currentSum = prefixSum - givenSum   
        if(!m.has(prefixSum)){
            m.set(prefixSum,i);
            if(m.has(currentSum)){
                start = m.get(currentSum);
                end = i;
            }
        }

    }
    let subArray = [];    
    if(end == -1){
        return -1;
    }else{
        for(let i = start+1; i<=end; i++){
            subArray.push(arr[i]);
        }
        for(let j = start+1; j<=end; j++){
            arr.splice(start+1,1);
        }
    }
    console.log(arr);
    console.log(subArray)
    return subArray;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
let givenSum = 12;
let allSubArrays = [];
// findSubArraywithGivenSum(arr, givenSum);
while(arr.length > 0){
    console.log("While running...")
    let result = findSubArraywithGivenSum(arr,givenSum)
    if(result === -1){
        console.log(allSubArrays)
        break;
    }else{
        allSubArrays.push(result);
    }
}

