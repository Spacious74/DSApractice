function mergingIntervals(arr){

    
    arr.sort((a, b) => a[0] - b[0]);
    console.log(arr)
    let tempArr= [];
    let i = 0;
    let n = arr.length;
    while(i < n){
        console.log("While running")
        let counter = i;
        if(counter + 1 > n){
            break;
        }
        while(counter + 1 < n && arr[counter][1] >= arr[counter + 1][0]){
            counter++;
        }
        tempArr.push([arr[i][0], arr[counter][1]])
        i = counter + 1;
    }

    console.log(tempArr);

}
// let intervals = [[1,3],[2,6],[8,10],[15,18]];
// let intervals = [[1,4],[4,5]];
// let intervals = [[1,4],[0,4]];
let intervals = [[1,4],[2,3]];
let n = intervals.length;
mergingIntervals(intervals, n);

// let arr= [];
// arr.push([1,2]);
// console.log(arr);