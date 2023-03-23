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

    console.log(arr);
    console.log(m);
    
    if(end == -1){
        console.log("Subarray not found ");
        return;
    }else{
        console.log("Subarray found whose sum is ", givenSum)
    }
    console.log("start : ", start+1);
    console.log("end : ", end);

    let subArray = [];
    for(let i = start+1; i<=end; i++){
        subArray.push(arr[i]);
    }
    console.log("Subarray : ", subArray);

}
let arr = [2,1,3,4,5,6];
let givenSum = 12;
findSubArraywithGivenSum(arr,givenSum); 

