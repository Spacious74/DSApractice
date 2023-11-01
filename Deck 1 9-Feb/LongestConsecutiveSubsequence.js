function findLongestSequence(arr){

    let s = new Set(arr);
    let max = 0;
    for(let i = 0; i< arr.length; i++){

        if(s.has(arr[i]-1)){
            continue;
        }

        let currNum = arr[i];
        let curmax = 1;

        while(s.has(currNum+1)){
            currNum++;
            curmax++;
        }
        max = Math.max(max, curmax);

    }

    console.log("Length of longest sequence : ",max);

}

let arr = [100,11,4,3,2,10];
findLongestSequence(arr); 