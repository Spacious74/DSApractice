function shiftNegativeEle(arr){

    let n = arr.length;
    let l = 0;
    let r = n-1;

    while(l<=r){

        if(arr[l] > 0){
            l++;
        }else if(arr[r] < 0){
            r--;
        }else{
            [arr[l],arr[r]] = [arr[r],arr[l]];
            l++; r--;
        }

    }
    console.log(arr);


}
let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6];
shiftNegativeEle(arr);
