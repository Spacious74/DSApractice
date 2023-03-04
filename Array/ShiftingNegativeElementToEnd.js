function shiftNegativeElement(arr){

    // Two Pointer appraoch
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        if(arr[start] >=0 && arr[end]<0){
            start++; end--;
        }else if(arr[start] <0 && arr[end]>=0){
            let ele = arr[start];
            arr[start] = arr[end];
            arr[end] = ele;
        }else if(arr[start]<0 && arr[end]<0){
            end--;
        }else if(arr[start]>0 && arr[end]>0){
            start++;
        }
    }

    console.log(arr);


    // This is the unshift and push approach-
    // How - 
    // 1. First create a new array (newArr).
    // 2. Now in for loop we are checking that if element is positive then
    //    unshift that element at starting of newArr and if element is negative then
    //    push that element at last position of newArr.

    // let newArr = [];
    // for(let i=0; i<arr.length; i++){
    //     (arr[i] >= 0)?(newArr.unshift(arr[i])):(newArr.push(arr[i]));
    // }
    // console.log(newArr);

}

let arr = [-2,-3,-1,-4,5,6,7,-8]
shiftNegativeElement(arr)