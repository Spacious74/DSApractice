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

    console.log(max, " is Longest Consecutive Subsequence");

}

let arr = [100,11, 3, 21, 4, 6, 12, 5];
findLongestSequence(arr); 