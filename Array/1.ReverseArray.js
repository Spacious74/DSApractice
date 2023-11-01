function reverseArray(arr){

    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
    
}
let arr = [1,2,3,4,5,6,7,8,9,10];
// arr = ['V','I','S','H','A','L'];
console.log("Array Before Reverse : " + arr);
console.log("Array After Reverse : " + reverseArray(arr));