function subarrayWithSumZero(arr){

    console.log("");
    
    // for(let i=0;i<arr.length;i++){
    //     let sum = arr[i];
    //     for(let j = i+1; j< arr.length; j++){
    //         sum += arr[j]
    //         if(sum === 0){
    //             console.log("subarray with sum zero found");
    //             return;
    //         }
    //     }
    // }
    // console.log("Not found subarray with sum 0");


    let prefixSum = 0;
    
    let m = new Map();
    let end = -1, start = 0;
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        prefixSum += arr[i];
        if(!m.has(prefixSum)){
            m.set(prefixSum, i);
        }else{
            end = i;
            start = m.get(prefixSum);
        }
    }

    if(end == -1){
        console.log("Subarray not found with sum = 0");
        return;
    }else{
        console.log("Subarray founded with sum = 0");
    }
    
    console.log("");
    console.log("Start index : ", start+1);
    console.log("End index : ", end);

    let subArray = [];
    for(let i = start+1; i <= end; i++) {
        subArray.push(arr[i]);
    }
    console.log("Subarray : ", subArray);

}

let arr = [4,6,2,-3,1,5];
subarrayWithSumZero(arr);